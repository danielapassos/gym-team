import { HStack, VStack, Heading, Text, Icon } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import { UserPhoto } from "./UserPhoto";
import { TouchableOpacity } from "react-native";

export function HomeHeader(){
    return(
        <HStack bg="gray.600" pt={16} pb={8} px={8} alignItems="center">
            <UserPhoto 
                source={{uri: 'https://github.com/danielapassos.png'}}
                alt="User photo"
                size={16}
                mr={4}
            />

            <VStack>
                <Text color="gray.100" fontSize="md" >
                    Hey,
                </Text>
                <Heading color="gray.100" fontSize="md">
                    Daniela
                </Heading>
            </VStack>
            
            <TouchableOpacity>
                <Icon 
                    as={MaterialIcons}
                    name="logout"
                    color="gray.200"
                    size={7}
                    />
            </TouchableOpacity>

        </HStack>
    )
}