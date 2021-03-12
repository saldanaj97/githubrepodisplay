import React, { useEffect, useState, lazy, Suspense} from 'react';
import Loading from "../Loading/loading";
import '../Projects/projects.css';

export default function Projects(){
    const RepoCards = lazy(() => import('../../components/RepoCards/repo_cards'));
    const renderLoader = () => <Loading />;
    const [repo, setRepo] = useState ([]);

    useEffect(() => {
        fetch('https://api.github.com/users/saldanaj97/repos')
            .then(res => res.json())
            .then(data => {
                setData(data);
                console.log(data);
            });
    }, []);

    const setData = (array) => {
        setRepo(array);
    }

    return (
        <Suspense fallback={renderLoader()}>
        <div className="repocards">
            <h1>Project List: </h1>
            <div className="repocards-div-main">
                {
                    repo.map((v,i) => {
                        if(v.stargazers_count > 0){
                            return <RepoCards repo={v} key={v.node_id}/>
                        }
                    })
                } 
            </div>
        </div>
        </Suspense>
    )
}