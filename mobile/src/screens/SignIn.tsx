import { VStack, Text, Image, Center, Heading, ScrollView, useToast } from "native-base";
import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
import { Controller, useForm } from 'react-hook-form';
import { useAuth } from '@hooks/useAuth'
import { AppError } from "@utils/AppError";
import { useState } from "react";

type FormData = {
    email: string;
    password: string;
  }

export function SignIn(){
  const { signIn } = useAuth()
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>()
  const toast = useToast()
  const [isLoading, setIsLoading] = useState(false)

  function handleNewAccount(){
    navigation.navigate('signUp')
    }

  async function handleSignIn({ email, password }: FormData) {
    try {
      setIsLoading(true)
      await signIn(email, password);
      
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title =  isAppError ? error.message : 'Try again later.'

      setIsLoading(false)

      toast.show({
        title,
          placement: 'top',
          bgColor: 'red.500',
          duration: 5000,
          color: 'white'
        });
        
      }
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator = {false}>
        <VStack flex={1} px="10px" pb={16}>
            <Image
                defaultSource={BackgroundImg}
                source={BackgroundImg}
                alt="Gym App Background Image"
                resizeMode="contain"
                position="absolute"
            />
        <Center my={24}>
            <LogoSvg />
            <Text color="gray.100" fontSize="sm">
                Train your mind and body
            </Text>
        </Center>

        <Center>
            <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
                Access your account
            </Heading>

            <Controller 
            control={control}
            name="email"
            rules={{ required: 'Email' }}
            render={({ field: { onChange } }) => (
              <Input 
                placeholder="Email" 
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                errormessage={errors.email?.message}
              />
            )}
          />

          <Controller 
            control={control}
            name="password"
            rules={{ required: 'Password' }}
            render={({ field: { onChange } }) => (
              <Input 
                placeholder="Password" 
                secureTextEntry
                onChangeText={onChange}
                errormessage={errors.password?.message}
              />
            )}
          />

          <Button title="Access" onPress={handleSubmit(handleSignIn)} isLoading={isLoading} />
            
        </Center>

        <Center mt={24}>
            <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body"> 
                Still don't got access?
            </Text>

            <Button title="Create account" variant="outline" onPress={handleNewAccount}/>
        </Center>
        
        </VStack>
        </ScrollView>
    )
}