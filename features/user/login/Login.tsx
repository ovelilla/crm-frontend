import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import LoadingButton from "@mui/lab/LoadingButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import useLoginStore from "@/features/user/login/store/login.store";
import {
    loginSchema,
    LoginSchema,
} from "@/features/user/login/schemas/login.schema";
import { Form } from "@/features/user/login/styles";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const { loading, user, auth, errors, login } = useLoginStore((state) => state);

    const {
        register,
        handleSubmit,
        formState: { errors: formErrors },
        setError,
    } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit: SubmitHandler<LoginSchema> = async (values) => {
        console.log(process.env.BACKEND_URL);
        console.log(values);
        console.log(formErrors);
        await login(values);
        console.log(errors);
        console.log(user);
        console.log(auth);
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextField
                label="Email"
                autoComplete="email"
                type="email"
                required
                error={!!formErrors.email}
                helperText={formErrors.email ? formErrors.email.message : ""}
                {...register("email")}
            />

            <TextField
                label="Password"
                autoComplete="current-password"
                type={showPassword ? "text" : "password"}
                required
                error={!!formErrors.password}
                helperText={
                    formErrors.password ? formErrors.password.message : ""
                }
                {...register("password")}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => setShowPassword(!showPassword)}
                                onMouseDown={(e) => e.preventDefault()}
                                edge="end"
                            >
                                {showPassword ? (
                                    <VisibilityOff />
                                ) : (
                                    <Visibility />
                                )}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />

            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recordarme"
            />

            <LoadingButton
                type="submit"
                variant="contained"
                size="large"
                color="primary"
                fullWidth
                loading={loading}
            >
                Iniciar sesión
            </LoadingButton>
        </Form>
    );
};

export default Login;
