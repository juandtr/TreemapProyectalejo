import React from 'react'

export const IndividualData = ({individualExcelData}) => {
    return (
        <>
            <th>{individualExcelData.Item}</th>
            <th>{individualExcelData.Axe}</th>
            <th>{individualExcelData.Type}</th>
            <th>{individualExcelData.Priorite}</th>
            <th>{individualExcelData.Montant}</th>
            <th>{individualExcelData.Nist}</th>
            <th>{individualExcelData.Iso27001}</th>
            <th>{individualExcelData.Soc2}</th>
        </>
    )
}
