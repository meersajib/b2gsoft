import React from 'react'
import styles from '../public/assets/css/question.module.css'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const QuestionOne = () => {
    const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
        },
    },
    }))(TableRow);
    

    const company = {
        name: "B2GSOFT",
        occupation: {
        title: "React.js Developer",
        experience: 1
        },
        pc: [{
        name: "hp",
        core: "i3"
        },{
        name: "asus",
        core: "i5"
        },{
        name: "dell",
        core: "i3"
        }]
    }
     
    const rows = company?.pc?.filter(config => config?.core == `i3`);

    return (
        <div className={styles.main}>
            <div>
                {Object.keys(company)?.length ? <div>
                    <div>
                        <h1>{company?.name}</h1>
                    <h3>{ company?.occupation?.title }</h3>
                    <h4>Experience { company?.occupation?.experience } Year</h4>
                    </div>
                    <div>
                        <h2>i3 PC List</h2>
                        <TableContainer className={styles.tableContainer} component={Paper}>
                            <Table className={styles.table} aria-label="customized table">
                                <TableHead>
                                <TableRow className={styles.tableHead}>
                                    <StyledTableCell>PC Neme</StyledTableCell>
                                    <StyledTableCell>PC Configuration</StyledTableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row" className={styles.capitalize}>
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell component="th" scope="row">
                                       Core {row.core}
                                    </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                                </TableBody>
                            </Table>
                            </TableContainer>
                    </div>
                </div> : 'No Data'}
            </div>
        </div>
    )
}

export default QuestionOne
