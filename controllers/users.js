import { getUsersDb } from "../database_postgres/get_users.js";
import { saveUserDb } from "../database_postgres/save_user.js";
import { getUserByIdDb } from "../database_postgres/get_user_by_id.js"
import { deleteUserDb } from "../database_postgres/delete_user.js";
import { updateUserDb } from "../database_postgres/update_user.js";

export const getUsers = async (req, res) => {
    const users = await getUsersDb();
    if (users === null) {
        res.status(500).json({message: "Server error"});
    } else if (users === false) {
        res.status(400).json({message: "Client error"});
    } else {
        res.status(200).json(users);
    }
}

export const getUserById = async (req, res) => {
    const user = await getUserByIdDb(req.params.id);
    if (user === null) {
        res.status(500).json({message: "Server error"});
    } else if (user === undefined) {
        res.status(404).json({message: "Not found"});
    } else if (user === false) {
        res.status(400).json({message: "Client error"});
    } else {
        res.status(200).json(user);
    }
}

export const createUser = async (req, res) => {
    // console.log(req.body);
    const newUser = await saveUserDb(req.body);
    if (newUser === null) {
        res.status(500).json({message: "Server error"});
    } else if (newUser === false || newUser === undefined) {
        res.status(400).json({message: "Client error"});
    } else {
        res.status(201).json(newUser);
    }
}

export const deleteUser = async (req, res) => {
    const changes = await deleteUserDb(req.params.id);
    if (changes === null) {
        res.status(500).json({message: "Server error"});
    } else if (changes === false || changes === 0) {
        res.status(400).json({message: "Client error"});
    } else {
        res.status(200).json(changes);
    }
}

export const updateUser = async (req, res) => {
    const changes = await updateUserDb(req.body);
    if (changes === null) {
        res.status(500).json({message: "Server error"});
    } else if (changes === false || changes === 0) {
        res.status(400).json({message: "Client error"});
    } else {
        res.status(200).json(changes);
    }
}
