// Validate data when creating tasks
exports.validateCreateTask = function(req, res, next) {
    const { title, status } = req.body;
    
    if (!title || title.trim() === "") {
        return res.status(400).json({ error: "Title is required" });
    }
    
    if (title.length > 100) {
        return res.status(400).json({ error: "Title too long (max 100 chars)" });
    }
    
    const validStatuses = ["pending", "in-progress", "completed"];
    if (status && !validStatuses.includes(status)) {
        return res.status(400).json({ error: "Invalid status" });
    }
    
    next();
};

// Validate data when updating tasks
exports.validateUpdateTask = function(req, res, next) {
    const { title, status } = req.body;
    
    if (title !== undefined && title.trim() === "") {
        return res.status(400).json({ error: "Title cannot be empty" });
    }
    
    if (title && title.length > 100) {
        return res.status(400).json({ error: "Title too long (max 100 chars)" });
    }
    
    const validStatuses = ["pending", "in-progress", "completed"];
    if (status && !validStatuses.includes(status)) {
        return res.status(400).json({ error: "Invalid status" });
    }
    
    next();
};
