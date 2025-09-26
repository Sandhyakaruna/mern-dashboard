import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  List,
  ListItem,
  Checkbox,
  Avatar,
  Skeleton,
} from "@mui/material";

function App() {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const API = process.env.REACT_APP_API_URL || "http://localhost:5000";

  useEffect(() => {
    // Fetch users
    axios
      .get(`${API}/api/users`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));

    // Fetch tasks
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => setTasks(res.data))
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  return (
    <Container sx={{ marginTop: 4 }}>
      {/* Header */}
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
        My Dashboard
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        {new Date().toDateString()}
      </Typography>

      {/* Stats Cards */}
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6">Total Users</Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                {users.length || 0}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6">Completed Tasks</Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                12
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6">Pending Tasks</Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                4
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Users Table */}
      <Typography variant="h6" sx={{ marginTop: 4 }}>
        Users
      </Typography>
      <Typography variant="caption" color="text.secondary">
        Showing first 5 users from API
      </Typography>
      <Table sx={{ marginTop: 1 }}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Company</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.length === 0
            ? Array.from({ length: 5 }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Skeleton variant="text" width={100} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width={150} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width={120} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width={100} />
                  </TableCell>
                </TableRow>
              ))
            : users.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{ "&:hover": { backgroundColor: "#f5f5f5" } }}
                >
                  <TableCell>
                    <Avatar
                      sx={{
                        display: "inline-flex",
                        width: 30,
                        height: 30,
                        marginRight: 1,
                        fontSize: 14,
                        bgcolor: "#1976d2",
                      }}
                    >
                      {user.name[0]}
                    </Avatar>
                    {user.name}
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.company.name}</TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>

      {/* Task List */}
      <Typography variant="h6" sx={{ marginTop: 4 }}>
        Tasks
      </Typography>
      <Typography variant="caption" color="text.secondary">
        Mark tasks as completed (UI only)
      </Typography>
      <List>
        {tasks.length === 0
          ? Array.from({ length: 5 }).map((_, i) => (
              <ListItem key={i}>
                <Skeleton variant="text" width={200} />
              </ListItem>
            ))
          : tasks.map((task) => (
              <ListItem key={task.id}>
                <Checkbox checked={task.completed} />
                {task.title}
              </ListItem>
            ))}
      </List>
    </Container>
  );
}

export default App;
