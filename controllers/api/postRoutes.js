const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

// POST route to add new post.
router.post("/", withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        })

        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

// PUT route to update existing post by ID.
router.put("/:id", withAuth, async (req, res) => {
    try {
        const postData = await Post.update(req.body, {
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            }
        })

        if (!postData) {
            res.status(404).json({ message: "No post found with this ID."});
            return;
        }

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
})

// DELETE route to delete existing post by ID.
router.delete("/:id", withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!postData) {
            res.status(404).json({ message: "No post fonud with this ID."});
            return;
        }

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;