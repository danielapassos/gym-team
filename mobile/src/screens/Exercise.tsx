import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Box, HStack, Heading, Image, Text, VStack, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";

import BodySvg from '@assets/body.svg'
import BackSvg from '@assets/ArrowLeft.svg'
import SeriesSvg from '@assets/series.svg'
import RepetitionsSvg from '@assets/repetitions.svg'
import { Button } from "@components/Button";

export function Exercise(){
    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleGoBack(){
        navigation.goBack();
    }

    return(
        <VStack flex={1}>
            <VStack px={8} bg="gray.600" pt={12}>
                <TouchableOpacity onPress={handleGoBack}>
                    <BackSvg/>
                </TouchableOpacity>
                <HStack justifyContent="space-between" mt={4} mb={8} alignItems="center">
                    <Heading color="gray.100" fontSize="lg" flexShrink={1}>
                        Puxada Frontal
                    </Heading>

                    <HStack>
                        <BodySvg/>
                        <Text color="gray.200" ml={1} textTransform="capitalize">
                            Back Exercises
                        </Text>
                    </HStack>

                </HStack>

            </VStack>

            <ScrollView>
            <VStack p={8}>
                <Image
                    w="full"
                    h={80}
                    source={{uri: 'https://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg'}}
                    alt="Name of exercise"
                    mb={3}
                    resizeMode="cover"
                    rounded="lg"
                />

                <Box>
                <HStack alignItems="center" justifyContent="space-around" mb={6} mt={5}>
                    <HStack>
                        <SeriesSvg/>
                        <Text color="gray.200" ml={2}>
                            3 series
                        </Text>
                    </HStack>
                    <HStack>

                        <RepetitionsSvg/>
                        <Text color="gray.200" ml={2}>
                            12 repetitions
                        </Text>
                    </HStack>
                    </HStack>

                    <Button 
                        title="Mark as done"
                        />

                </Box>
            </VStack>
            </ScrollView>
            </VStack>
    )
}