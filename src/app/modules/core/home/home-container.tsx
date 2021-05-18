import {useSelector} from 'react-redux';
import {selectCompany, selectOwnerId} from 'src/app/store/companies';
import HomeView from './home-view';
import React, {useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {Company, companyClient} from 'src/app/api/companies';


const HomeContainer: React.FunctionComponent = () => {
    const history = useHistory();
    const ownerId = useSelector(selectOwnerId);
    const company = useSelector(selectCompany);

    useEffect(() => {
        if (company) {
            history.push(`/c/${company.name}`);
        }
        if (ownerId && !company) {
            companyClient.detail(ownerId)
                .then(company => history.push(`/c/${company.name}`))
        }
    }, [ownerId]);


    const promiseOptions = (value: string) => companyClient.get({search: value})
        .then(res => res.results);

    const navigateToPage = (company: Company | null) => {
        if (company) {
            history.push(`/c/${company.name}`)
        }
    }

    return (
        <>
            {!ownerId &&
            <HomeView values={promiseOptions}
                      onChange={navigateToPage}/>
            }
        </>
    )
}

export default HomeContainer;
