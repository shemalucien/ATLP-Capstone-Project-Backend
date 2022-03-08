import Query from '../database/model/query.model';

export const saveQuery = async (req, res) => {
    const query = req.body;
    const newQuery = new (query);
    await newQuery.save();
    res.status(201).json({ success: true, data: newQuery });
}

export const getAllQueries = async (req, res) => {
    const queries = await Query.find();
    res.status(200).json({ success: true, data: queries })
}

export const getById = async (req, res) => {
    const { id } = req.params;
    const query = await Query.findById(id);
    if (!query) return res.status(404).json({ success: false, message: "Query not found" });
    res.status(200).json({ success: true, data: query });
}

export const updateQuery = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    const query = await Query.findById(id);
    if (!query) return res.status(404).json({ success: false, message: "Query not found" });
    await Query.findByIdAndUpdate(id, updates);
    res.status(200).json({ success: true, message: "Query updated successfully" })
}

export const deleteQueryById = async (req, res) => {
    const { id } = req.params;
    const query = await Query.findById(id);
    if (!query) return res.status(404).json({ success: false, message: "Query not found" });
    await Query.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Query deleted", data: query });
}