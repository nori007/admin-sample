import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMember } from "../../types";
import { SAMPLE_MEMBERS } from "../../constants";
import { getMember } from "../../service/requestMember";

function Member() {
    
    const { id } = useParams();
    const [ member, setMember ] = useState<IMember>();
    // let member: IMember = SAMPLE_MEMBERS.filter((item: IMember) => { if (item.id === Number(id)) return item; })[0];

    useEffect(() => {
        getMember(id as string).then(member => {
            console.log(member)
            setMember(member);
        })
    }, []);

    return (
        <>
            <h3>{id}의 페이지</h3>
            <p>{`id: ${member?.id}`}</p>
            <p>{`loginId: ${member?.loginId}`}</p>
            <p>{`name: ${member?.name}`}</p>
            <p>{`email: ${member?.email}`}</p>
            <p>{`authority: ${member?.authority}`}</p>
                
                
                
                
        </>
    )
}

export default Member;