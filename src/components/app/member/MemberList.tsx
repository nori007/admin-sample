import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { SAMPLE_MEMBERS } from '../../../constants';
import { IMember } from '../../../types';
import Member from './Member';

function MemberList() {
    const { id } = useParams();

    const getMemberList = () => {
        return (
            <ul>
                {SAMPLE_MEMBERS.map((member: IMember) => {
                    return (
                        <li key={member.id}>
                            <p>
                                {`${member.id} // ${member.loginId}`}
                                <Link to={`./${member.id}`}>상세보기</Link>
                            </p>
                        </li>
                    ) 
                })}
            </ul>
        )
    }

    return (
        <>
            <h3>맴버 리스트 페이지</h3>
            {
                id ?
                <Member /> :
                getMemberList()
            }
        </>
    )
}

export default MemberList;


