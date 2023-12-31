import { HStack, Heading, Image, Text, VStack, Icon } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from '@expo/vector-icons'

import GoSvg from '@assets/CaretRight.svg'

type Props = TouchableOpacityProps & {

}

export function ExerciseStack({...rest}: Props){
    return(
        <TouchableOpacity {...rest}>
            <HStack bg="gray.500" alignItems="center" p={2} pr={4} rounded="md" mb={3}>
                <Image mr={4} w={16} h={16} rounded="md" alt="Exercise image" resizeMode="cover" source={{ uri:'https://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg' }} />
                
                <VStack flex={1}>
                    <Heading fontSize="lg" color="white">
                        Remada Unilateral
                    </Heading>
                    <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
                        3 series x 12 repetitions
                    </Text>
                </VStack>
                <GoSvg/>
            </HStack>
        </TouchableOpacity>
    )
}