import Link from "next/link";
import styles from "./Login.module.scss";
import { push } from "firebase/database";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import AuthLayout from "@/components/layouts/AuthLayout";

const LoginView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push, query } = useRouter();

  const callbackUrl: any = query.callbackUrl || "/";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    const form = event.target as HTMLFormElement;

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: form.email.value,
        password: form.password.value,
        callbackUrl,
      });

      if (!res?.error) {
        setIsLoading(false);
        form.reset();
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError("Email or Password is incorrect");
      }
    } catch (error) {
      setIsLoading(false);
      setError("Email or Password is incorrect");
    }
  };

  return (
    <AuthLayout
      title="Login"
      error={error}
      link="/auth/register"
      linkText="Don't have an account? Sign up "
    >
      <form onSubmit={handleSubmit}>
        <Input label="Email" type="email" name="email" />
        <Input label="Password" type="password" name="password" />
        <Button
          type="submit"
          variant="primary"
          className={styles.login__button}
        >
          {isLoading ? "Loading..." : "Login"}
        </Button>
      </form> 
      <hr className={styles.login__devider} />
      <div className={styles.login__google}>
        <Button
          type="button"
          className={styles.login__other__button}
          onClick={() => signIn("google", { callbackUrl, redirect: false })}
        >
          <i className="bx bxl-google"></i>Login With Google
        </Button>
      </div>
    </AuthLayout>
  );
};

export default LoginView;
