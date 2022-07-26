import {useEffect, useState} from 'react';
import axios from 'axios';

function useApi(url:any){
    const [data,setData] = useState<any>(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    useEffect(() =>{
        const config = {
            headers: {
                "Accept":"application/json",
                "Content-Type":"application/json"
            } 
        };
        setLoading(true);
        
        
        axios
            .get(url,config)
            .then((response) => {setData(response.data);})
            .catch((err)=>{setError(err);})
            .finally(() =>{setLoading(false);})
    },[url]);

    const refetch = () => {
        const config = {
            headers: {
                "Accept":"application/json",
                "Content-Type":"application/json"
            } 
        };
        setLoading(true);
        axios
            .post(url,{name: "Medicamento desde Ionic 1"}, config)
            .then((response) => {setData(response.data);})
            .catch((err)=>{setError(err);})
            .finally(() =>{setLoading(false);})
    };

    const post = (body:any) => {
        const config = {
            headers: {
                "Accept":"application/json",
                "Content-Type":"application/json"
            } 
        };
        setLoading(true);
        console.log(body)
        axios
            .post(url,body, config)
            .then((response) => {setData(response.data);})
            .catch((err)=>{setError(err);})
            .finally(() =>{setLoading(false);})
    };

    const put = (idEdit:string,body:any) => {
        const config = {
            headers: {
                "Content-Type":"application/json"
            } 
        };
        setLoading(true);
        axios
            .put(`${url}/${idEdit}`,body,config)
            .then((response) => {setData(response.data);})
            .catch((err)=>{setError(err);})
            .finally(() =>{setLoading(false);})
    };
    
    const del = (idDelete:string) => {
        const config = {
            headers: {
                "Accept":"application/json",
                "Content-Type":"application/json"
            } 
        };
        setLoading(true);
        axios
            .delete(`${url}/${idDelete}`,config)
            .then((response) => {setData(response.data);})
            .catch((err)=>{setError(err);})
            .finally(() =>{setLoading(false);})
    };
    return {data, loading, error,post,put,del}

}

export default useApi;