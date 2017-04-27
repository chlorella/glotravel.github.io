var option1 = {
    title: {
        text: '北韓收入來源',
    },
    tooltip: {},
    legend: {
        data: ['北韓收支'],
        textStyle: { color: '#ffffff' }
    },
    xAxis: [{
        data: ['軍事經費', '旅遊業收入', '煤礦出口收入'],
        axisTick: { show: false },
        axisLine: { show: true },
        axisLabel: {
            margin: 20,
            textStyle: {
                color: '#ffffff',
                fontSize: 20
            }
        }
    }],
    yAxis: {
        splitLine: { show: false },
        axisTick: { show: false },
        axisLine: { show: true },
        axisLabel: { show: true }
    },

    textStyle: {
        color: '#ffffff'
    },

    markLine: {
        z: -1
    },
    animationEasing: 'elasticOut',
    series: [{
        type: 'pictorialBar',
        name: '北韓收支',
        hoverAnimation: true,

        data: [{
            value: 4000000000,
            symbol: 'image://https://upload.wikimedia.org/wikipedia/commons/7/7b/United_States_one_dollar_bill%2C_obverse.jpg',
            symbolRepeat: true,
            symbolSize: ['40%', '20%'],
            symbolOffset: [0, 10],
            symbolMargin: '-30%',
            animationDelay: function (dataIndex, params) {
                return params.index * 30;
            }
        }, {
            value: 43600000,
            symbol: 'image://https://cdn.pixabay.com/photo/2013/07/13/11/29/camera-158262_960_720.png',
            symbolSize: ['10%', '100%'],
            symbolPosition: 'end',
            z: 10
        }, {
            value: 1000000000,
            symbol: 'image://http://images.clipartpanda.com/coal-clipart-coal_cart_T.png',
            symbolSize: ['50%', '100%'],
            symbolPosition: 'end'
        }],
        markLine: {
            symbol: ['none', 'none'],
            label: {
                normal: { show: false }
            },
            lineStyle: {
                normal: {
                    color: '#0099ff',
                    width: 1
                }
            },
            data: [{
                yAxis: 1000000000

            }]
        }
    },
    {
        name: '北韓收支',
        type: 'pictorialBar',
        barGap: '-100%',
        symbol: 'circle',
        itemStyle: {
            normal: {
                color: '#185491'
            }
        },

    }]
};

var chart1 = echarts.init(document.getElementById('main'));
chart1.setOption(option1);

var chart2 = echarts.init(document.getElementById('main2'));

var option2 = {
    title: {
        text: '參加者性別與年齡分布',
    },
    color: ['#262996','#B2232B'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['男','女']
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['81-90歲', '71-80歲', '61-70歲', '51-60歲', '41-50歲', '31-40歲', '21-30歲', '11-20歲'
        ]
    },
    series: [
        {
            name: '男',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [0, 1, 2, 5, 10, 40, 45, 1]
        },
        {
            name: '女',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [1, 0, 3, 4, 8, 32, 40, 0]
        },
    ]
};
chart2.setOption(option2);

var chart3 = echarts.init(document.getElementById('main3'));

var option3 = {
    title: {
        text: '參加者職業分布',
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        data: ['學生', '無業', '退休', '政府部門', '紀律部隊', '慈善機構', '金融/銀行/投資', '商業部門/顧問', '互聯網公司', '航空', '工程/軟件開發', '廣告', '教育', '出版', '其他']
    },
    series: [
        {
            name: '職業',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '50',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                { value: 29, name: '學生' },
                { value: 13, name: '無業' },
                { value: 7, name: '退休' },
                { value: 6, name: '政府部門' },
                { value: 2, name: '紀律部隊' },
                { value: 10, name: '醫院/醫療部門' },
                { value: 3, name: '慈善機構' },
                { value: 17, name: '金融/銀行/投資' },
                { value: 57, name: '商業部門/顧問' },
                { value: 8, name: '互聯網公司' },
                { value: 5, name: '航空' },
                { value: 13, name: '工程/軟件開發' },
                { value: 13, name: '廣告' },
                { value: 3, name: '教育' },
                { value: 3, name: '出版' },
                { value: 3, name: '其他' }
            ]
        }
    ]
};

chart3.setOption(option3);

var chart4 = echarts.init(document.getElementById('main4'));

var option4 = {
    title: {
        text: '到訪北韓月份分布',
    },
    color: ['#A11FFF', '#16E042', '#FFA322'],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['2015年', '2016年', '2017年']
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}人'
        }
    },
    series: [
        {
            name: '2015年',
            type: 'line',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0],
            markPoint: {
                data: [
                    { type: 'max', name: '最大值' }
                ]
            },
        },
        {
            name: '2016年',
            type: 'line',
            data: [0, 0, 9, 0, 7, 0, 22, 15, 10, 23, 0, 12],
            markPoint: {
                data: [
                    { type: 'max', name: '最大值' }
                ]
            },
        },
        {
            name: '2017年',
            type: 'line',
            data: [10, 0, 0, 80, 0, 0, 0, 0, 0, 0, 0, 0],
            markPoint: {
                data: [
                    { type: 'max', name: '最大值' },
                ]
            },
        }
    ]
};

chart4.setOption(option4);

window.addEventListener("resize", () => { this.chart1.resize();  this.chart2.resize();  this.chart3.resize();  chart4.resize();});
