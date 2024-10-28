function initializeMap02(containerId, topoJsonUrl) {
    (async function () {
        try {
            const response = await fetch(topoJsonUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch topo JSON');
            }
            const topology = await response.json();

            // Prepare demo data. The data is joined to map using value of 'hc-key'
            // property by default. See API docs for 'joinBy' for more info on linking
            // data and map.
            const data020201 =
                [{
                    'hc-key': 'cn-bj',
                    value: 21893095,
                    num: 712049
                }, {
                    'hc-key': 'cn-tj',
                    value: 13866009,
                    num: 374669
                }, {
                    'hc-key': 'cn-hb',
                    value: 74610235,
                    num: 437083
                }, {
                    'hc-key': 'cn-sx',
                    value: 34915616,
                    num: 265323
                }, {
                    'hc-key': 'cn-nm',
                    value: 24049155,
                    num: 64120
                }, {
                    'hc-key': 'cn-ln',
                    value: 42591407,
                    num: 128119
                }, {
                    'hc-key': 'cn-jl',
                    value: 24073453,
                    num: 72990
                }, {
                    'hc-key': 'cn-hl',
                    value: 31850088,
                    num: 1816
                }, {
                    'hc-key': 'cn-sh',
                    value: 24870895,
                    num: 998341
                }, {
                    'hc-key': 'cn-js',
                    value: 84748016,
                    num: 979869
                }, {
                    'hc-key': 'cn-zj',
                    value: 64567588,
                    num: 1339482
                }, {
                    'hc-key': 'cn-ah',
                    value: 61027171,
                    num: 410299
                }, {
                    'hc-key': 'cn-fj',
                    value: 41540086,
                    num: 362061
                }, {
                    'hc-key': 'cn-jx',
                    value: 45188635,
                    num: 235562
                }, {
                    'hc-key': 'cn-sd',
                    value: 101527453,
                    num: 906464
                }, {
                    'hc-key': 'cn-he',
                    value: 99365519,
                    num: 836891
                }, {
                    'hc-key': 'cn-hu',
                    value: 57752557,
                    num: 395896
                }, {
                    'hc-key': 'cn-hn',
                    value: 66444864,
                    num: 362991
                }, {
                    'hc-key': 'cn-gd',
                    value: 126012510,
                    num: 1998110
                }, {
                    'hc-key': 'cn-gx',
                    value: 50126804,
                    num: 436217
                }, {
                    'hc-key': 'cn-ha',
                    value: 10081232,
                    num: 186127
                }, {
                    'hc-key': 'cn-cq',
                    value: 32054159,
                    num: 276327
                }, {
                    'hc-key': 'cn-sc',
                    value: 83674866,
                    num: 544957
                }, {
                    'hc-key': 'cn-gz',
                    value: 38562148,
                    num: 172483
                }, {
                    'hc-key': 'cn-yn',
                    value: 47209277,
                    num: 213452
                }, {
                    'hc-key': 'cn-xz',
                    value: 3648100,
                    num: 338
                }, {
                    'hc-key': 'cn-sa',
                    value: 39528999,
                    num: 304389
                }, {
                    'hc-key': 'cn-gs',
                    value: 25019831,
                    num: 57558
                }, {
                    'hc-key': 'cn-qh',
                    value: 5923957,
                    num: 10836
                }, {
                    'hc-key': 'cn-nx',
                    value: 7202654,
                    num: 24328
                }, {
                    'hc-key': 'cn-xj',
                    value: 25852345,
                    num: 46217
                }
                ];

            const provinceNameMap = {
                'cn-bj': '北京市',
                'cn-tj': '天津市',
                'cn-hb': '河北省',
                'cn-sx': '山西省',
                'cn-nm': '内蒙古自治区',
                'cn-ln': '辽宁省',
                'cn-jl': '吉林省',
                'cn-hl': '黑龙江省',
                'cn-sh': '上海市',
                'cn-js': '江苏省',
                'cn-zj': '浙江省',
                'cn-ah': '安徽省',
                'cn-fj': '福建省',
                'cn-jx': '江西省',
                'cn-sd': '山东省',
                'cn-he': '河南省',
                'cn-hu': '湖北省',
                'cn-hn': '湖南省',
                'cn-gd': '广东省',
                'cn-gx': '广西壮族自治区',
                'cn-ha': '海南省',
                'cn-cq': '重庆市',
                'cn-sc': '四川省',
                'cn-gz': '贵州省',
                'cn-yn': '云南省',
                'cn-xz': '西藏自治区',
                'cn-sa': '陕西省',
                'cn-gs': '甘肃省',
                'cn-qh': '青海省',
                'cn-nx': '宁夏回族自治区',
                'cn-xj': '新疆维吾尔自治区'
            };
            
            // 创建地图配置
            const mapOption = {
                chart: {
                    map: topology,
                    events: {
                        click: function() {
                            this.update(barOption);
                        }
                    }
                },

                title: {
                    text: '全国各省 新能源汽车数量/人口 比例示意图',
                    style: {
                        fontSize: '16px' // 字体大小  
                    }
                },

                mapNavigation: {
                    enabled: true,
                    buttonOptions: {
                        verticalAlign: 'bottom'
                    }
                },

                colorAxis: {
                    min: 10,
                    stops: [
                        [0, '#A4E2C6'],
                        [0.15, '#789262'],
                        [0.75, '#057748']
                    ]


                },
                plotOptions: {
                    mapbubble: {
                        tooltip: {
                            pointFormat: "1"
                        }
                    }

                },

                tooltip: {
                    enabled: true,
                    animation: true,
                    style: {
                        fontSize: '14px',
                        fontWeight: 'bold'
                    },
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderWidth: 1,
                    borderColor: '#AAA',
                    borderRadius: 3,
                    shadow: true,
                    formatter: function() {
                        return `<div style="font-weight: bold; color: #333;">
                                    <span style="font-size: 16px; color: #000;">${this.point.name}</span><br/>
                                    <span style="color: #2f7ed8;">比值：${this.point.y.toFixed(2)} 辆/万人</span><br/>
                                    <span style="color: #0d233a;">新能源汽车保有量：${this.point.num.toLocaleString()} 辆</span><br/>
                                    <span style="color: #0d233a;">人口数量：${this.point.population.toLocaleString()} 人</span>
                                </div>`;
                    },
                    useHTML: true,
                    padding: 10,
                    // 设置 tooltip 位置
                    positioner: function (labelWidth, labelHeight, point) {
                        const chart = this.chart;
                        return {
                            x: chart.plotWidth - labelWidth - 10,  // 距离右边界 10px
                            y: chart.plotHeight - labelHeight - 10  // 距离下边界 10px
                        };
                    },
                    // 确保 tooltip 不会超出图表边界
                    bounds: {
                        x1: 0,
                        y1: 0,
                        x2: 'plotWidth',
                        y2: 'plotHeight'
                    }
                },

                series: [{
                    data: data020201,
                    name: '新能源汽车保有量和人口数量',
                    states: {
                        hover: {
                            color: '#11DA55'
                        },

                    },
                    dataLabels: {
                        enabled: true,
                        formatter: function () {
                            return provinceNameMap[this.point['hc-key']];
                        }
                    }
                }]
            };

            // 创建条形图配置
            const barOption = {
                chart: {
                    type: 'bar',
                    events: {
                        click: function() {
                            this.update(mapOption);
                        }
                    }
                },
                title: {
                    text: '全国各省新能源汽车保有量与人口比值排序',
                    style: {
                        fontSize: '16px'
                    }
                },
                xAxis: {
                    type: 'value',
                    title: {
                        text: '新能源汽车保有量/万人口（辆/万人）'
                    }
                },
                yAxis: {
                    type: 'category',
                    axisLabel: {
                        rotate: 30
                    }
                },
                tooltip: {
                    enabled: true,
                    followPointer: true,  // 跟随鼠标移动
                    followTouchMove: true,  // 触摸设备上跟随手指移动
                    animation: true,
                    style: {
                        fontSize: '14px',
                        fontWeight: 'bold'
                    },
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderWidth: 1,
                    borderColor: '#AAA',
                    borderRadius: 3,
                    shadow: true,
                    formatter: function() {
                        return `<div style="font-weight: bold; color: #333;">
                                    <span style="font-size: 16px; color: #000;">${this.point.name}</span><br/>
                                    <span style="color: #2f7ed8;">比值：${this.point.y.toFixed(2)} 辆/万人</span><br/>
                                    <span style="color: #0d233a;">新能源汽车保有量：${this.point.num.toLocaleString()} 辆</span><br/>
                                    <span style="color: #0d233a;">人口数量：${this.point.population.toLocaleString()} 人</span>
                                </div>`;
                    },
                    useHTML: true,
                    padding: 10
                },
                plotOptions: {
                    series: {
                        states: {
                            hover: {
                                brightness: 0.1
                            }
                        }
                    }
                },
                series: [{
                    name: '新能源汽车保有量/万人口',
                    data: data020201.map(function (item) {
                        return {
                            name: provinceNameMap[item['hc-key']],
                            y: (item.num / item.value) * 10000,
                            num: item.num,
                            population: item.value
                        };
                    }).sort((a, b) => b.y - a.y)
                }]
            };

            // 更新 yAxis 数据
            barOption.yAxis.data = barOption.series[0].data.map(item => item.name);

            // 初始化图表
            const chart = Highcharts.mapChart(containerId, mapOption);
            
            // 记录当前显示的是否为地图
            let isMap = true;
            
            // 添加点击事件监听器
            document.getElementById(containerId).addEventListener('click', function() {
                if (isMap) {
                    chart.update(barOption);
                }
            });

        } catch (error) {
            console.error('Error initializing map:', error);
        }
    })();
}



