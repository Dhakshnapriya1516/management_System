import { useMemo, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  TextField,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
  Chip,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function MasterPage({
  title,
  columns,
  initialRows,
}) {
  const [rows, setRows] = useState(initialRows);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({});

  const filteredRows = useMemo(() => {
    return rows.filter((row) =>
      columns.some((column) =>
        String(row[column.field] ?? "")
          .toLowerCase()
          .includes(search.toLowerCase())
      )
    );
  }, [rows, search, columns]);

  const handleAdd = () => {
    setEditingId(null);
    setForm({});
    setOpen(true);
  };

  const handleEdit = (row) => {
    setEditingId(row.id);
    setForm({ ...row });
    setOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      setRows((previous) => previous.filter((row) => row.id !== id));
    }
  };

  const handleSave = () => {
    const missingField = columns.find(
      (column) => column.required && !String(form[column.field] ?? "").trim()
    );

    if (missingField) {
      alert(`Please enter ${missingField.label}`);
      return;
    }

    if (editingId !== null) {
      setRows((previous) =>
        previous.map((row) =>
          row.id === editingId ? { ...row, ...form } : row
        )
      );
    } else {
      setRows((previous) => [
        ...previous,
        { ...form, id: Date.now() },
      ]);
    }

    setOpen(false);
  };

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        gap={2}
        mb={3}
      >
        <Typography variant="h5" fontWeight="bold">
          {title}
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAdd}
        >
          Add New
        </Button>
      </Box>

      <Paper sx={{ p: 2, borderRadius: 2 }}>
        <TextField
          size="small"
          placeholder={`Search ${title}...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ mb: 2, width: { xs: "100%", sm: 320 } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: "#f3f5f9" }}>
                {columns.map((column) => (
                  <TableCell key={column.field}>
                    <strong>{column.label}</strong>
                  </TableCell>
                ))}
                <TableCell><strong>Actions</strong></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredRows.length > 0 ? (
                filteredRows.map((row) => (
                  <TableRow hover key={row.id}>
                    {columns.map((column) => (
                      <TableCell key={column.field}>
                        {column.field === "status" ? (
                          <Chip
                            label={row[column.field]}
                            color={row[column.field] === "Active" ? "success" : "default"}
                            size="small"
                          />
                        ) : (
                          row[column.field] ?? "-"
                        )}
                      </TableCell>
                    ))}

                    <TableCell>
                      <IconButton
                        color="primary"
                        onClick={() => handleEdit(row)}
                        aria-label="Edit"
                      >
                        <EditIcon />
                      </IconButton>

                      <IconButton
                        color="error"
                        onClick={() => handleDelete(row.id)}
                        aria-label="Delete"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length + 1} align="center">
                    No records found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>
          {editingId !== null ? `Edit ${title}` : `Add ${title}`}
        </DialogTitle>

        <DialogContent>
          <Box display="grid" gap={2} pt={1}>
            {columns.map((column) => (
              column.type === "select" ? (
                <TextField
                  key={column.field}
                  select
                  fullWidth
                  label={column.label}
                  value={form[column.field] ?? ""}
                  onChange={(e) =>
                    setForm({ ...form, [column.field]: e.target.value })
                  }
                  required={column.required}
                >
                  {(column.options || []).map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              ) : (
                <TextField
                  key={column.field}
                  fullWidth
                  label={column.label}
                  type={column.type || "text"}
                  value={form[column.field] ?? ""}
                  onChange={(e) =>
                    setForm({ ...form, [column.field]: e.target.value })
                  }
                  required={column.required}
                />
              )
            ))}
          </Box>
        </DialogContent>

        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setOpen(false)} color="inherit">
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}


