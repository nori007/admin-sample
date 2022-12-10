import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IMember } from '../../types'
import { SAMPLE_MEMBERS } from '../../constants'

function Member() {
    
    const { id } = useParams();
    let member: IMember = SAMPLE_MEMBERS.filter((item: IMember) => { if (item.id === Number(id)) return item; })[0];

    return (
        <>
            <h3>{id}의 페이지</h3>
            <p>
                {`id: ${member?.id} // loginId: ${member.loginId} // name: ${member.name} // authority: ${member.authority}`}
            </p>
        </>
    )
}

export default Member;