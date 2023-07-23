import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Center, ScrollView, VStack, Skeleton, Text, Heading } from "native-base";
import { useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system';
import { FileInfo } from "expo-file-system";


const PHOTO_SIZE = 33

export function Profile(){
    const [photoIsLoading, setphotoIsLoading] = useState(false)
    const [userPhoto, setUserPhoto] = useState('https://github.com/danielapassos.png')

    async function handleUserPhotoSelect(){

        try{
        setphotoIsLoading(true)
        const photoSelected = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
            aspect: [4, 4],
            allowsEditing: true
        });

        if (photoSelected.canceled){
            return
        } 

        if (photoSelected.assets[0].uri){
            const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri) as FileInfo

            if(photoInfo.size && (photoInfo.size/1024/1024) > 5){
                Alert.alert("This image is too large. Choose another photo up to 5mb.")
            }

            setUserPhoto(photoSelected.assets[0].uri)
        }

        }catch(e){
            console.log(e)
        } finally {
            setphotoIsLoading(false)
        }

    }   
    

    return(
        <VStack flex={1} px={4} mb={30}>
            <ScreenHeader
                title="Profile"
            />
            <ScrollView contentContainerStyle={{ paddingBottom: 56 }} showsVerticalScrollIndicator={false}>
                <Center>
                    { photoIsLoading ?
                        <Skeleton 
                        w={PHOTO_SIZE} 
                        h={PHOTO_SIZE} 
                        rounded='full' 
                        startColor="gray.500"
                        endColor="gray.400"
                    />
                    :
                    <UserPhoto source={{ uri: userPhoto }}
                    alt="User photo"
                    size={PHOTO_SIZE} 
                    />
                }

                <TouchableOpacity onPress={handleUserPhotoSelect}>
                    <Text color="green.500" fontSize="sm" fontWeight="bold" mt={2} mb={8}>
                        Update photo
                    </Text>
                </TouchableOpacity>
                </Center>

                <Input bg="gray.500"
                    placeholder="Name"
                />

                <Input bg="gray.500"
                    placeholder="Email"
                    isDisabled
                />

                    <Heading color="gray.200" fontSize="md" mb={2} alignSelf="flex-start" mt={12}>
                        Update your password
                    </Heading>

                    <Input bg="gray.600"
                        placeholder="Old password"
                        secureTextEntry
                    />

                    <Input bg="gray.600"
                        placeholder="New password"
                        secureTextEntry
                    />

                    <Input bg="gray.600"
                        placeholder="Confirm your new password"
                        secureTextEntry
                    />

                    <Button
                        title="Update"
                        mt={4}
                    />
            </ScrollView>
        </VStack>
    )
}