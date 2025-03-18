import { TablePagination } from "@mui/material";

interface Props {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (value: number) => void;
  onRowsPerPageChange: (value: number) => void;
}

export default function CustomTablePagination({
  count,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
}: Props) {
  return (
    <TablePagination
      component="div"
      rowsPerPageOptions={[4, 25, 50, 100]}
      count={count}
      page={page}
      rowsPerPage={rowsPerPage}
      onPageChange={(_, newPage) => onPageChange(newPage)}
      onRowsPerPageChange={(event) =>
        onRowsPerPageChange(Number(event.target.value))
      }
    />
  );
}
