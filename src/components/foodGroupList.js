import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PieChart from 'react-minimal-pie-chart';
import Chart from "react-apexcharts";


class FoodGroupList extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          options: {
            chart: {
              id: "basic-bar"
            },
            type: 'bar',
            xaxis: {
              categories: ["Milk", "Vegetables", "Grains", "Meat"]
            }
          },
          series: [
            {
              name: "Eaten",
              data: [this.props.items.milkSum, this.props.items.vegSum, this.props.items.grainSum, this.props.items.meatSum]
            }
          ]
        };
      }
    
    handlePieChart = () => {
        this.props.setPieChart(true)
        this.props.setGraph(false)
      };
    
      handleGraph = () => {
        this.props.setPieChart(false)
        this.props.setGraph(true)
      };

  render() {
    
    return (
        <Wrapper>
            <StatsWrapper>
            <ToggleWrapper>
                <InDine className={this.props.main.isPieChartEnabled ? 'enabled' : 'disabled'} onClick={() => this.handlePieChart()}>
                <p>PIE CHART</p>
                </InDine>
                <OutDine className={this.props.main.isGraphEnabled ? 'enabled' : 'disabled'} onClick={() => this.handleGraph()}>
                <p>GRAPH</p>
                </OutDine>
            </ToggleWrapper>
            {this.props.main.isPieChartEnabled &&
                <PieChart
                data={[
                    { title: 'Milk', value: this.props.items.milkSum, color: '#48B19E' },
                    { title: 'Veg', value: this.props.items.vegSum, color: '#A4AB38' },
                    { title: 'Grain', value: this.props.items.grainSum, color: '#B58235' },
                    { title: 'Meat', value: this.props.items.meatSum, color: '#EB5757' },
                ]}
            />
            }
            {this.props.main.isGraphEnabled &&
                <ChartWrapper>
                    <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="bar"
                        width="100%"
                    />
              </ChartWrapper>
            }
            </StatsWrapper>
            <ListWrapper>
            <Card>
                <ImageSection color="#48B19E">
                    <ImageText color="#48B19E">MILK and ALTERNATIVES</ImageText>
                    <Image left="5px">
                        <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="-25" y="-90" width="600" height="200">
                            <rect x="-25" y="-90" width="600" height="200" rx="10" fill="#F3F3F3"/>
                            </mask>
                            <g mask="url(#mask0)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M114.545 50.6958V51.2241V51.2775V137.387H37.5V51.2775V51.2241V50.6958H37.606C37.6163 50.6267 37.6248 50.5576 37.6334 50.4885C37.6622 50.2543 37.6911 50.0204 37.7869 49.7925L45.2392 32.0442V12.5H106.805V32.0442L114.258 49.7925C114.354 50.0204 114.382 50.2543 114.411 50.4885C114.42 50.5576 114.429 50.6267 114.439 50.6958H114.545ZM55.9086 85.2187C53.7552 89.6175 49.3606 92.0394 44.9951 90.7637V111.734H107.05V58.197H57.7236C57.5574 59.0716 57.1902 60.085 56.761 61.2699C55.7414 64.0844 54.3713 67.8656 54.512 73.0512C54.6011 76.335 55.2512 78.5 55.7621 80.2012C56.3488 82.155 56.7517 83.4969 55.9086 85.2187ZM99.3104 29.0497V20.0012H52.7344V29.0497H99.3104ZM100.567 36.5509H51.477L45.5463 50.6958H106.499L100.567 36.5509ZM44.9951 119.235V129.886H107.05V119.235H44.9951ZM94.8148 84.3412C95.2967 84.5087 98.0123 85.5137 98.8992 88.1662C99.6398 90.38 98.6798 92.4075 97.8042 94.0819C96.7711 96.0575 93.4973 102.316 87.7848 102.316C83.3723 102.317 79.0348 98.5825 79.4379 96.3744C79.5961 95.5075 80.5198 95.125 81.6354 94.6637C82.9836 94.1056 84.6129 93.4319 85.5136 91.6456C86.0067 90.6675 85.9898 89.9406 85.9742 89.2425C85.9579 88.5275 85.9423 87.8419 86.4754 86.9475C87.8886 84.5781 91.6567 83.245 94.8148 84.3412Z" fill="#48B19E"/>
                            </g>
                            </g>
                            <defs>
                            <clipPath id="clip0">
                            <rect width="150" height="150" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </Image>
                </ImageSection>
                <TextSection>
                    {(this.props.items.milkGroup.length == 0) &&
                        <p>Empty List....</p>
                    }
                    {this.props.items.milkGroup.map((item, index) => (
                        <p>{item}</p>
                    ))}
                </TextSection>
                <CountSection color="#48B19E">
                    <p>({this.props.items.milkSum}/250) gms</p>
                </CountSection>
                {(this.props.items.milkSum >= 250) &&
                    <Check><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" fill="none" rx="0" ry="0"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M19.0683 4.57652C18.6778 4.186 18.0446 4.186 17.6541 4.57652L9.17453 13.0561L6.34498 10.2265C5.95445 9.836 5.32129 9.836 4.93076 10.2265L2.80827 12.349C2.41775 12.7395 2.41775 13.3727 2.80827 13.7632L5.63783 16.5928L5.63327 16.5973L8.46287 19.4269C8.85339 19.8175 9.48656 19.8175 9.87708 19.4269L21.1908 8.11323C21.5813 7.7227 21.5813 7.08954 21.1908 6.69901L19.0683 4.57652Z" fill="#4a90e2"></path></svg></Check>
                }
            </Card>
            <Card>
                <ImageSection color="#A4AB38">
                    <ImageText color="#A4AB38">VEGETABLES and FRUITS</ImageText>
                    <Image left="30px">
                    <svg width="89" height="114" viewBox="0 0 89 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M88.5303 82.85C88.5303 71.1625 82.8428 60.2875 72.1553 51.2875C67.9678 47.7875 63.6553 43.0375 60.7803 39.6625C75.7803 31.1625 78.2803 9.47504 78.4053 8.53754L79.0303 2.53754L73.3428 4.66254C65.2803 7.66254 58.5303 12.6 54.3428 15.725C51.5928 11.0375 47.8428 5.47504 47.5928 5.16254L44.5303 0.600037L41.4053 5.10004C39.4678 7.91254 37.3428 10.85 35.8428 13.0375C26.5928 7.16254 12.9677 4.28754 12.3427 4.16254L7.15552 3.10004L7.84289 8.35004C9.96789 24.2875 20.5302 34.0375 29.0928 38.7875C26.2802 42.1625 21.5305 47.6 16.9055 51.475C6.21802 60.475 0.530518 71.35 0.530518 83.0375C0.530518 98.35 9.9052 108.662 26.7802 112.662C25.5927 113.85 24.5929 115.35 23.8429 117.1C22.8429 119.475 23.9055 122.225 26.2805 123.287C26.9055 123.537 27.5304 123.662 28.1554 123.662C29.9678 123.662 31.7178 122.6 32.4678 120.85C33.9053 117.475 37.7803 117.1 38.0303 117.037C38.6553 116.975 39.2803 116.787 39.8428 116.537V120.1C39.8428 122.662 41.9678 124.787 44.5303 124.787C47.0928 124.787 49.2178 122.662 49.2178 120.1V116.162C49.5928 116.287 49.9053 116.412 50.2803 116.475C50.4678 116.475 54.5928 116.912 55.9678 120.6C56.6553 122.475 58.4678 123.662 60.3428 123.662C60.9053 123.662 61.4678 123.6 61.9678 123.35C64.4053 122.475 65.6553 119.725 64.7178 117.35C64.0303 115.537 63.0928 113.975 61.9678 112.725C79.0928 108.6 88.5303 98.225 88.5303 82.85ZM16.6553 12.85C22.0303 14.4125 29.8428 17.1625 34.4053 21.0375L37.5303 23.6625L39.9053 20.35C39.9053 20.35 42.0303 17.4125 44.5303 13.7875C46.4053 16.725 48.7178 20.475 49.7803 22.6625L51.3428 25.9125L54.6553 24.475C55.5928 24.0375 56.6553 23.2875 58.5928 21.85C61.2178 19.9125 65.0303 17.0375 69.5303 14.6C67.6553 21.1625 63.5928 30.5375 55.2178 34.0375L44.6553 33.85H44.5928H44.5303L36.9053 33.975C30.6553 31.7875 20.5303 25.1 16.6553 12.85ZM73.0303 99.85C75.7178 79.975 69.7178 72.9125 63.7803 66.1C62.3428 64.4125 60.8428 62.725 59.4678 60.725C58.2803 59.0375 55.9678 58.6 54.2178 59.7875C52.5303 60.975 52.0928 63.2875 53.2803 65.0375C54.8428 67.225 56.4678 69.1625 58.0928 71.0375C64.0303 77.9125 68.7803 83.4125 64.6553 104.162C59.5928 105.912 53.8428 106.662 48.2178 106.912V76.975C48.2178 74.9125 46.5303 73.225 44.4678 73.225C42.4053 73.225 40.7178 74.9125 40.7178 76.975V106.912C34.2803 106.662 27.593 105.662 21.968 103.287C18.218 83.2875 22.8427 77.85 28.7178 71.0375C30.9053 68.475 33.4053 65.6 35.5303 61.85C36.5303 60.0375 35.9053 57.7875 34.0928 56.725C32.2803 55.725 30.0303 56.35 28.9678 58.1625C27.218 61.2875 25.1554 63.6625 23.0304 66.1625C17.3429 72.725 11.5303 79.475 13.5303 97.725C10.1553 94.1625 8.03021 89.4125 8.03021 82.9125C8.03021 71.0375 15.4677 62.35 21.7177 57.1C27.8427 51.975 33.9678 44.6 36.4678 41.5375L44.4678 41.4125L52.4678 41.5375C54.9678 44.6 61.0303 51.9125 67.2178 57.1C73.4678 62.35 80.9053 71.0375 80.9053 82.9125C81.0303 90.7875 77.8428 96.1625 73.0303 99.85Z" fill="#A4AB38"/>
                    </svg>
                    </Image>
                </ImageSection>
                <TextSection>
                    {(this.props.items.vegGroup.length == 0) &&
                        <p>Empty List....</p>
                    }
                    {this.props.items.vegGroup.map((item, index) => (
                        <p>{item}</p>
                    ))}
                </TextSection>
                <CountSection color="#A4AB38">
                    <p>({this.props.items.vegSum}/400) gms</p>
                </CountSection>
                {(this.props.items.vegSum >= 400) &&
                    <Check><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" fill="none" rx="0" ry="0"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M19.0683 4.57652C18.6778 4.186 18.0446 4.186 17.6541 4.57652L9.17453 13.0561L6.34498 10.2265C5.95445 9.836 5.32129 9.836 4.93076 10.2265L2.80827 12.349C2.41775 12.7395 2.41775 13.3727 2.80827 13.7632L5.63783 16.5928L5.63327 16.5973L8.46287 19.4269C8.85339 19.8175 9.48656 19.8175 9.87708 19.4269L21.1908 8.11323C21.5813 7.7227 21.5813 7.08954 21.1908 6.69901L19.0683 4.57652Z" fill="#4a90e2"></path></svg></Check>
                }
            </Card>
            <Card>
                <ImageSection color="#B58235">
                    <ImageText color="#B58235">GRAIN PRODUCTS</ImageText>
                    <Image left="0px">
                    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="-26" y="-85" width="600" height="200">
                        <rect x="-26" y="-85" width="600" height="200" rx="10" fill="#F3F3F3"/>
                        </mask>
                        <g mask="url(#mask0)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M89.6828 108.522C98.5216 99.6825 147.135 51.0692 129.457 33.3915C111.78 15.7138 58.777 51.0388 45.5036 64.3122C32.914 76.9019 16.3623 93.4537 33.545 113.981C32.6011 115.15 31.6676 116.328 30.7446 117.515L19.9443 131.401C18.7921 132.882 18.9233 134.989 20.2503 136.316C21.833 137.899 24.4446 137.737 25.8187 135.97L36.0479 122.818C36.9505 121.657 37.8632 120.505 38.7858 119.361C60.1573 138.047 81.1285 117.076 89.6828 108.522ZM38.4978 108.035C28.8058 94.5925 38.2502 82.45 46.3782 74.0562L55.8274 83.505C56.7019 84.38 58.1796 83.5887 57.937 82.3762L54.7021 66.2014C69.6197 54.1237 112.234 26.7751 124.154 38.6948C127.769 42.3095 126.785 48.421 123.35 55.4885H103.034C101.767 55.4885 101.304 57.1582 102.391 57.8104L116.759 66.4312C116.428 66.9055 116.092 67.3806 115.751 67.8561C105.015 82.8287 89.4634 98.1931 85.1853 102.419C84.841 102.76 84.5691 103.028 84.3791 103.218C84.2028 103.394 84.0016 103.599 83.7759 103.827L83.7753 103.828V103.829L83.7747 103.829L83.7741 103.83L83.5053 104.102H64.0416C62.7228 104.102 62.303 105.881 63.4828 106.47L74.541 111.999C66.3228 117.992 54.5645 122.986 43.5939 113.579C53.7546 101.729 65.0091 90.8487 77.2122 81.0862L95.1091 66.7682C96.8441 65.3805 96.9872 62.7932 95.4166 61.2225C94.0734 59.8796 91.936 59.7612 90.4528 60.9475L71.9091 75.7825C59.7884 85.4794 48.6043 96.2775 38.4978 108.035Z" fill="#B58235"/>
                        </g>
                        </g>
                        <defs>
                        <clipPath id="clip0">
                        <rect width="150" height="150" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    </Image>
                </ImageSection>
                <TextSection>
                    {(this.props.items.grainGroup.length == 0) &&
                        <p>Empty List....</p>
                    }
                    {this.props.items.grainGroup.map((item, index) => (
                        <p>{item}</p>
                    ))}
                </TextSection>
                <CountSection color="#B58235">
                    <p>({this.props.items.grainSum}/170) gms</p>
                </CountSection>
                {(this.props.items.grainSum >= 170) &&
                    <Check><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" fill="none" rx="0" ry="0"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M19.0683 4.57652C18.6778 4.186 18.0446 4.186 17.6541 4.57652L9.17453 13.0561L6.34498 10.2265C5.95445 9.836 5.32129 9.836 4.93076 10.2265L2.80827 12.349C2.41775 12.7395 2.41775 13.3727 2.80827 13.7632L5.63783 16.5928L5.63327 16.5973L8.46287 19.4269C8.85339 19.8175 9.48656 19.8175 9.87708 19.4269L21.1908 8.11323C21.5813 7.7227 21.5813 7.08954 21.1908 6.69901L19.0683 4.57652Z" fill="#4a90e2"></path></svg></Check>
                }
            </Card>
            <Card>
                <ImageSection color="#EB5757">
                    <ImageText color="#EB5757">MEAT and ALTERNATIVES</ImageText>
                    <Image left="0px">
                    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="-25" y="-78" width="600" height="210">
                        <rect x="-25" y="-78" width="600" height="210" rx="10" fill="#F3F3F3"/>
                        </mask>
                        <g mask="url(#mask0)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M121.949 44.6357C124.574 44.3857 127.449 45.3232 129.699 47.3232C132.012 49.3232 133.387 52.0732 133.574 55.3232C133.762 58.3232 132.824 61.1982 130.824 63.4482C128.824 65.6982 126.074 67.0732 123.074 67.2607L121.137 67.3857C120.544 67.4281 119.974 67.4693 119.426 67.5089C115.933 67.7614 113.349 67.9482 111.512 67.9482L105.449 75.1356C108.424 82.9437 107.159 90.9362 105.614 100.697L105.574 100.948C104.137 110.136 103.324 115.261 100.387 120.823C93.6368 133.698 78.5749 145.511 62.0121 145.511C59.5121 145.511 56.9494 145.261 54.4494 144.698C37.4494 140.886 27.8244 126.073 24.7619 114.573C24.5119 113.698 19.262 93.5106 31.8245 78.1981C37.012 71.8232 45.0744 68.9482 61.0744 63.2607C77.8868 57.2607 85.1368 57.5732 89.6368 59.0732L95.2618 52.2607C94.6993 46.0107 94.5118 43.6357 94.5743 42.6982C94.8243 36.5107 100.012 31.6357 106.262 31.8857C112.137 32.1357 118.137 35.8232 118.199 42.0732C118.387 42.8232 118.637 43.6982 118.824 44.1982C119.512 44.3857 120.887 44.5732 121.949 44.6357ZM98.1149 100.226L98.1993 99.6981C100.012 88.2606 100.887 81.5106 97.3243 75.0731C94.3868 69.8232 90.6993 67.4482 88.1368 66.3857C86.5743 65.6982 81.8868 63.7607 63.6993 70.2607C48.9493 75.5106 41.5745 78.1356 37.6995 82.8856C27.5745 95.2606 32.0118 112.386 32.0743 112.573C34.5743 122.073 42.3871 134.261 56.1371 137.323C73.8249 141.323 88.5743 127.198 93.7618 117.323C96.0899 112.912 96.7368 108.861 98.1149 100.226ZM122.637 59.5732C123.637 59.5107 124.512 59.0732 125.199 58.3232C125.824 57.5732 126.199 56.5732 126.137 55.5732C126.074 54.5107 125.574 53.6357 124.824 52.9482C124.074 52.3232 123.137 51.9482 122.2 52.0732C118.95 52.0107 115.137 51.4482 113.324 49.2607C111.574 47.2607 110.95 43.8857 110.825 42.8857L110.762 42.5107V42.1357C110.824 40.5732 108.324 39.3857 106.012 39.2607C104.012 39.1357 102.199 40.8232 102.137 42.8857C102.137 43.8232 102.637 49.6357 102.824 51.5107L103.074 54.6357L96.4493 62.6982C98.1368 64.0107 99.8868 65.7607 101.574 68.0107L108.387 59.9482L110.512 60.3232C111.824 60.5107 118.387 59.9482 120.574 59.7607L122.637 59.5732ZM42.6376 95.0731C46.5126 85.7606 54.6376 82.2606 57.0126 81.3856C58.9501 80.6356 61.0751 81.6981 61.7626 83.6356C62.4501 85.5731 61.4503 87.7606 59.5128 88.4481C58.3253 88.8231 52.2629 91.3231 49.5129 97.9481C46.9504 104.136 48.8254 109.698 49.5129 111.261C50.3254 113.198 49.4503 115.386 47.5128 116.198C47.0753 116.386 46.5751 116.511 46.0751 116.511C44.6376 116.511 43.2626 115.636 42.6376 114.198C41.7001 111.948 38.9501 103.948 42.6376 95.0731Z" fill="#EB5757"/>
                        </g>
                        </g>
                        <defs>
                        <clipPath id="clip0">
                        <rect width="150" height="150" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    </Image>
                </ImageSection>
                <TextSection>
                    {(this.props.items.meatGroup.length == 0) &&
                        <p>Empty List....</p>
                    }
                    {this.props.items.meatGroup.map((item, index) => (
                        <p>{item}</p>
                    ))}
                </TextSection>
                <CountSection color="#EB5757">
                    <p>({this.props.items.meatSum}/160) gms</p>
                </CountSection>
                {(this.props.items.meatSum >= 160) &&
                    <Check><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" fill="none" rx="0" ry="0"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M19.0683 4.57652C18.6778 4.186 18.0446 4.186 17.6541 4.57652L9.17453 13.0561L6.34498 10.2265C5.95445 9.836 5.32129 9.836 4.93076 10.2265L2.80827 12.349C2.41775 12.7395 2.41775 13.3727 2.80827 13.7632L5.63783 16.5928L5.63327 16.5973L8.46287 19.4269C8.85339 19.8175 9.48656 19.8175 9.87708 19.4269L21.1908 8.11323C21.5813 7.7227 21.5813 7.08954 21.1908 6.69901L19.0683 4.57652Z" fill="#4a90e2"></path></svg></Check>
                }
            </Card>
            </ListWrapper>
        </Wrapper>
    );
  }
}


const mapStateToProps = state => {
  return {
    main: state.main,
    items: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setItems: data => {
      dispatch({
        type: 'testCase',
        payload: data,
      });
    },
    setPieChart: isEnabled => {
        dispatch({
          type: 'pieChart',
          payload: isEnabled,
        });
      },
      setGraph: isEnabled => {
        dispatch({
          type: 'graph',
          payload: isEnabled,
        });
      },
  };
};
  
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FoodGroupList);

const Wrapper = styled.div``;

const StatsWrapper = styled.div`
    position: absolute;
    height: 550px;
    width: 350px;
    left: 50px;
    bottom: 0px;
    overflow: scroll;
`;

const ListWrapper = styled.div`
    position: absolute;
    height: 640px;
    width: 400px;
    right: 70px;
    bottom: 0px;
    overflow-y: scroll;
    overflow-x: hidden;
`;

const Card = styled.div`
    position: relative;
    left: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 150px;
    width: 380px;
    border-radius: 10px;
    background-color: #F3F3F3;
`;

const ImageSection = styled.div`
    position: absolute;
    height: 150px;
    width: 150px;
    overflow: hidden;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border: 5px solid ${props => props.color};
`;

const ImageText = styled.p`
    position: absolute;
    right: 10px;
    margin-top: 20px;
    font-size: 15px;
    font-weight: bold;
    font-family: Arial;
    text-align: right;
    color: ${props => props.color};
`;

const Image = styled.p`
    position: absolute;
    margin-left: ${props => props.left};
    margin-top: 70px;
`;

const TextSection = styled.p`
    position: relative;
    height: 100%;
    width: 400px;
    margin-left: 200px;
    overflow-x: hidden;
    overflow-y: scroll;
    p{
        position: relative;
        right: -20px;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: bold;
        font-family: Arial;
        color: black;
    }
`;

const CountSection = styled.p`
    position: absolute;
    height: 50px;
    width: 200px;
    top: 100px;
    right: 30px;
    p{
        right: 30px;
        text-align: right;
        font-size: 20px;
        font-weight: bold;
        font-family: Arial;
        color: ${props => props.color};
    }
`;

const Check = styled.p`
    position: absolute;
    top: 30px;
    right: 40px;
    transform: scale(2)
`;

const ToggleWrapper = styled.div`
    position: absolute;
    bottom: 50px;
    left: 20px;
    width: 322px;
    height: 50px;
    border-radius: 5px;
    border: 2px solid rgba(69, 66, 66, 1);
`;

const InDine = styled.div`
    position: absolute;
    width: 160px;
    height: 46px;
    cursor: pointer;
    border: 1px solid rgba(69, 66, 66, 1);
    p{
      margin-left: 32px;
      margin-top: 10px;
      position: absolute;
      font-size: 20px;
      font-weight: bold;
      font-family: Arial;
      color: #454242;
    }
    &.enabled {
      background-color: #454242;
      p{
        color: white;
      }
      transition: 0.5s cubic-bezier(0.5, 0.8, 0.2, 1);
    }
`;

const OutDine = styled.div`
    position: absolute;
    width: 160px;
    height: 46px;
    margin-left: 160px;
    cursor: pointer;
    border: 1px solid rgba(69, 66, 66, 1);
    p{
      margin-left: 35px;
      margin-top: 10px;
      position: absolute;
      font-size: 20px;
      font-weight: bold;
      font-family: Arial;
      color: #454242;
    }
    &.enabled {
      background-color: #454242;
        p{
          color: white;
        }
      }
      transition: 0.5s cubic-bezier(0.5, 0.8, 0.2, 1);
`;

const ChartWrapper = styled.div`
    position: absolute;
    top: 100px;
`;