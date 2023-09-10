import { HStack, VStack, Heading, Text, Icon } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import { UserPhoto } from "./UserPhoto";
import { TouchableOpacity } from "react-native";

import Logout from '@assets/SignOut.svg'
import { useAuth } from "@hooks/useAuth";
import defaultUserPhoto from '@assets/userPhotoDefault.png'

export function HomeHeader(){
    const { user, signOut } = useAuth()

    return(
        <HStack bg="gray.600" pt={16} pb={8} px={8} alignItems="center">
            <UserPhoto 
                source={user.avatar ? {uri: 'https://github.com/danielapassos.png'} : defaultUserPhoto}
                alt="User photo"
                size={16}
                mr={4}
            />

            <VStack flex={1}>
                <Text color="gray.100" fontSize="md" >
                    Hey,
                </Text>
                <Heading color="gray.100" fontSize="md">
                    {user.name}
                </Heading>
            </VStack>
            
            <TouchableOpacity 
                onPress={signOut}
                >
                <Logout/>
            </TouchableOpacity>

        </HStack>
    )
}