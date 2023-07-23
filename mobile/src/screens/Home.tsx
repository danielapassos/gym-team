import { ExerciseStack } from "@components/ExerciseStack";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { VStack, HStack, FlatList, Heading, Text } from "native-base";
import { useState } from "react";

export function Home(){

    const [groupSelected, setGroupSelected] = useState('Back')
    const [exercises, setExercises] = useState(['Remada Lateral', 'Remada Curvada', 'Remada Unilateral', 'Deadlift'])
    const [groups, setGroups] = useState(["Back", "Shoulders", "Biceps", "Triceps"])

    const navigation = useNavigation<AppNavigatorRoutesProps>()

    function handleOpenExerciseDetails(){
        navigation.navigate('exercise')
    }

    return(
        <VStack flex={1}>
            <HomeHeader/>

            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item}) =>(
                    <Group 
                    isActive={String(groupSelected).toLocaleUpperCase() === String(item).toLocaleUpperCase()} 
                    name={item}
                    onPress={() => setGroupSelected(item)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator = {false}
                _contentContainerStyle={{ px: 8 }}
                my={10}
                maxH={10}
                minH={10}
            />


            <VStack flex={1} px={8}>
            <HStack justifyContent="space-between" mb={5}>
                <Heading color="gray.200" fontSize="md">
                    Exercises
                </Heading>
                <Text color="gray.200" fontSize="sm">
                    {exercises.length}
                </Text>
            </HStack>


            <FlatList 
                data={exercises}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <ExerciseStack 
                        onPress={handleOpenExerciseDetails
                        }/>
                    )}
                showsVerticalScrollIndicator={false}
                _contentContainerStyle={{ paddingBottom:20 }}
            />

            </VStack>

        </VStack>
    )
}