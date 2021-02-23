import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

interface CoinPriceGraphProps {
    dataString: string;
}

const CoinPriceGraph = ({dataString}: CoinPriceGraphProps) => {

    const data = JSON.parse (dataString);

    return (
        <View style = {{marginLeft: 10,}}>
            <LineChart
                data={{
                labels: ["-7d", "-6d", "-5d", "-4d", "-3d", "-2d", "-1d", "Today"],
                datasets: [
                    {
                    data
                    }
                ]
                }}
                width={Dimensions.get("window").width-20} // from react-native
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                withInnerLines = {false}
                withOuterLines = {false}
                chartConfig={{
                backgroundColor: "#ffffff",
                backgroundGradientFrom: "#ffffff",
                backgroundGradientTo: "#ffffff",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(15, 54, 87, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                    // borderRadius: 16/
                },
                propsForDots: {
                    r: "0",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                }
                }}
                bezier
                style={{
                marginVertical: 8,
                // borderRadius: 16
                }}
            />
        </View>
    )
}

export default CoinPriceGraph

const styles = StyleSheet.create({})
