function status(request, response) {
    response.status(200).json({ chave: "Deu bão!" });
}

export default status;