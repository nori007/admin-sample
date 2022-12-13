import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SAMPLE_MEMBERS } from '../../constants';
import { IMember } from '../../types';
import { 
    Table, 
    TableHead, 
    TableRow, 
    TableCell, 
    TableBody 
} from '@mui/material';
import { getMembers } from '../../service/requestMember';

function MemberList() {
    const { id } = useParams();
    const [ members, setMembers ] = useState<IMember[]>([]);

    useEffect(() => {
        getMembers().then(data => {
            console.log(data);
            setMembers(data);
        });
    }, [])

    return (
        <Table stickyHeader size="small">
            <TableHead>
                <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell>loginId</TableCell>
                    <TableCell>name</TableCell>
                    <TableCell>email</TableCell>
                    <TableCell>authority</TableCell>
                    <TableCell>자세히</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {members.map((member: IMember) => {
                    return (
                        <TableRow key={member.id}>
                            
                            <TableCell>{member.id}</TableCell>
                            <TableCell>{member.loginId}</TableCell>
                            <TableCell>{member.name}</TableCell>
                            <TableCell>{member.authority}</TableCell>
                            <TableCell>{member.email}</TableCell>
                            <TableCell>
                                <Link to={`./${member.id}`}>
                                    상세보기
                                </Link>
                            </TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}

export default MemberList;


