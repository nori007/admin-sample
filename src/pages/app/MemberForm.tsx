import React from 'react';
import { useParams } from 'react-router-dom';
import Member from '../../components/members/Member';
import MemberList from '../../components/members/MemberList';

function MemberForm() {
    const { id } = useParams();

    return (
        <>
            <h3>맴버 리스트 페이지</h3>
            {
                id ?
                <Member /> :
                <MemberList />
            }
        </>
    )
}

export default MemberForm;


