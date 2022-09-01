const { Router } = require("express");
const { check } = require("express-validator");
const { login,googleSignIn } = require("../controllers/auth");
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

router.post('/login', [
    check("correo", "Correo obligatorio").isEmail(),
    check("password", "Contraseña obligatoria").not().isEmpty(),
    validarCampos
], login);

router.post('/google', [
    check("id_token", "id_token obligatorio").not().isEmpty(),
    validarCampos
], googleSignIn);

module.exports = router;
