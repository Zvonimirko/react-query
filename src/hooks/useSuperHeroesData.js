import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
    // refetchOnMount: true,
    // refetchOnWindowFocus: true,
    // refetchInterval: 10000,
    // refetchIntervalInBackground: true,
    // enable false to trigger fetch via refetch func returned from useQuery
    // enabled: false,
    onSuccess,
    onError,
    // select is useQuerys transformation functionality
    // select: (data) => {
    //   const superHeroNames = data.data.map((hero) => hero.name);
    //   return superHeroNames;
    // },
  });
};
