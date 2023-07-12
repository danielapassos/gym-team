import { VStack, Text, Image, Center, Heading, ScrollView } from "native-base";
import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn(){

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator = {false}>
        <VStack flex={1} bg="gray.700" px="10px" pb={16}>
            <Image
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

            <Input 
                placeholder="Email" 
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <Input 
                placeholder="Password"
                secureTextEntry
            />
            <Button title="Access"/>
        </Center>

        <Center mt={24}>
            <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body"> 
                Still don't got access?
            </Text>

            <Button title="Create account" variant="outline"/>
        </Center>
        
        </VStack>
        </ScrollView>
    )
}