import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Pages from "./Pages";
import axios from "axios";

export default function Grouped() {
    const [Searchparams] = useSearchParams();
    const keyword = Searchparams.get("category");
    const [Data, setData] = useState([])

    useEffect(() => {
        const fetch = async () => {
            try {
                const value = await axios.get(`http://localhost:3000/product?category=${keyword}`);
                setData(value.data.product);
            }
            catch (err) {
                console.log(err);
            }
        }
        fetch();
    }, [keyword]);
    return (
        <>
            <Pages data={Data} />
        </>
    )
}
