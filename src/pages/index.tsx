import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatorio").email("E-mail invalido"),
  password: yup.string().required("Senha obrigatoria"),
});
export default function Home() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });
  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };
  console.log(formState.errors.email);
  return (
    <Flex width="100vw" height="100vh" justify="center" align="center">
      <Flex
        as="form"
        width="100%"
        maxWidth="368px"
        flexDir="column"
        bg="gray.800"
        p="8"
        borderRadius="8px"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            label="E-Mail"
            type="email"
            {...register("email")}
            error={formState.errors.email}
          />
          <Input
            name="password"
            label="Password"
            type="password"
            {...register("password")}
            error={formState.errors.password}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          isLoading={formState.isSubmitting}
        >
          {" "}
          Entrar{" "}
        </Button>
      </Flex>
    </Flex>
  );
}
