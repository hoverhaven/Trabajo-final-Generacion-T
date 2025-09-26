import { Box } from "@mui/material"

export function Materiales({ datos }) {

    return (
        <>
            <Box sx={{backgroundColor: "red", }}>
                {datos.nombre}
                {datos.marcca}
            </Box>
        </>
    )
}