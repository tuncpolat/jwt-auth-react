import { useState } from "react";

export const usePagination = (data, curPage, artPerPage) => {
    const [coins, setCoins] = useState(data);
    const [currentPage, setCurrentPage] = useState(curPage)
    const [coinsPerPage, setCoinsPerPage] = useState(artPerPage);

    const indexOfLastArticle = currentPage * coinsPerPage;
    const indexOfFirstArticle = indexOfLastArticle - coinsPerPage;
    const currentCoins = coins.slice(indexOfFirstArticle, indexOfLastArticle)

    const paginate = (number) => {
        setCurrentPage(number)
    }

    return {
        coins,
        setCoins,
        currentPage,
        coinsPerPage,
        setCoinsPerPage,
        paginate,
        currentCoins
    };
};