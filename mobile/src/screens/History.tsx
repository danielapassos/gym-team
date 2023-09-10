import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { Center, Heading, Text, VStack, SectionList } from "native-base";
import { useState } from "react";

export function History(){
    const [exercises, setExercises] = useState([{
        title: '08.26.2023',
        data: ['Puxada Frontal', 'Remada Unilateral'],
      },
      {
        title: '08.27.2023',
        data: ['Remada Unilateral'],
      },
    ])

    return(
    <VStack flex={1}>
        <ScreenHeader title='History' />
        <SectionList
            sections={exercises}
            keyExtractor={item => item}
            renderItem={({ item })=> (
                <HistoryCard/>
            )}
            renderSectionHeader={({ section }) => (
                <Heading color="gray.200" fontSize="md" mt={10} mb={3}>
                    {section.title}
                </Heading>
            )}
            px={8}
            contentContainerStyle={exercises.length === 0 && {flex: 1, justifyContent: "center"}}
            ListEmptyComponent={() => (
                <Text color="gray.300" textAlign="center">
                    There aren't any registered exercises.{'\n'}
                    Let's workout today?
                </Text>
            )}
            showsVerticalScrollIndicator = {false}
        />
        

    </VStack>
    )
}