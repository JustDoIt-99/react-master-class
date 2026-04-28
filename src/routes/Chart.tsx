import {useQuery} from "@tanstack/react-query";
import {fetchCoinHistory} from "../api";
import {useParams} from "react-router-dom";

interface ChartProps {
    coinId:string;
}

function Chart() {

    const {coinId} = useParams<{coinId: string}>();

    console.log(coinId);

    const {isLoading, data} = useQuery({
        queryKey: ["ohlcv", coinId],
        queryFn: () => fetchCoinHistory(coinId!),
        enabled: !!coinId
    });

    return <h1>Chart</h1>
}

export default Chart;