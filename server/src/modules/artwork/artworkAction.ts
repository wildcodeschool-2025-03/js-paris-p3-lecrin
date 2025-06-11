import artworkRepository from "./artworkRepository";

async function getAll(req, res) {
    const result = await artworkRepository.selectAll();
    res.json(result);
}

export default { getAll }