import React from 'react';
import { MainLayout } from '../../layouts/MainLayout/MainLayout';
import { Container } from '../../styles/shared';
import { Popup, Searchbar, UserCards } from '../../components';
import { HomeSection } from './Home.styled';
import { User } from '../../types';

export const HomePage: React.FC = () => {
    const [users, setUsers] = React.useState<User[]>([
        {
            "name": "Ferdinand Carney",
            "phone": "(640) 447-3254",
            "email": "in@aol.net",
            "address": "563-4648 Curabitur Street",
            "position_name": "Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue",
            "department": "nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque,",
            "hire_date": "Dec 24, 2020"
        },
        {
            "name": "Deborah Gonzales",
            "phone": "1-258-431-9358",
            "email": "hendrerit@icloud.net",
            "address": "705 Pede Avenue",
            "position_name": "dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum",
            "department": "Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus",
            "hire_date": "Oct 25, 2020"
        },
        {
            "name": "Adrienne Mason",
            "phone": "1-395-514-3388",
            "email": "erat.eget.ipsum@icloud.ca",
            "address": "963 Montes, Avenue",
            "position_name": "diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec,",
            "department": "interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac",
            "hire_date": "Nov 15, 2020"
        },
        {
            "name": "Jonas Simon",
            "phone": "1-886-528-2605",
            "email": "at.augue.id@icloud.org",
            "address": "Ap #746-9362 Egestas Street",
            "position_name": "faucibus leo, in lobortis tellus justo sit amet nulla. Donec",
            "department": "montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique",
            "hire_date": "Jan 23, 2021"
        },
        {
            "name": "April Faulkner",
            "phone": "1-773-867-6849",
            "email": "tristique.pellentesque@aol.net",
            "address": "101-9945 Magna St.",
            "position_name": "ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices,",
            "department": "lectus. Cum sociis natoque penatibus et magnis dis parturient montes,",
            "hire_date": "Dec 28, 2020"
        },
        {
            "name": "Demetrius Church",
            "phone": "(451) 793-8149",
            "email": "erat.eget@aol.ca",
            "address": "P.O. Box 251, 1167 Odio. St.",
            "position_name": "ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat vel",
            "department": "Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit",
            "hire_date": "Jan 26, 2021"
        },
        {
            "name": "Giselle Poole",
            "phone": "(212) 422-5714",
            "email": "ullamcorper.duis@protonmail.edu",
            "address": "Ap #653-2069 Donec Av.",
            "position_name": "penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean",
            "department": "et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus",
            "hire_date": "Nov 24, 2020"
        },
    ]);
    const [popup, setPopup] = React.useState<User | null>(null);

    const openCard = React.useCallback((user: User) => setPopup(user), []);
    const closePopup = React.useCallback(() => setPopup(null), []);

    return (
        <MainLayout>
            <HomeSection>
                <Container>
                    <Searchbar onSearch={(str) => console.log(str)} />
                    <UserCards users={users} cardClickHandler={openCard} />
                </Container>
                <Popup user={popup} closePopupHandler={closePopup} />
            </HomeSection>
        </MainLayout>
    );
}