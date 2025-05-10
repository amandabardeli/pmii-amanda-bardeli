import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAAo2akaOmrVQVxnZNU2lDfB7mjHLIjZRk",
    authDomain: "meu-primeiro-firebasee.firebaseapp.com",
    projectId: "meu-primeiro-firebasee",
    storageBucket: "meu-primeiro-firebasee.firebasestorage.app",
    messagingSenderId: "121739024331",
    appId: "1:121739024331:web:701ad4c48a3c7ec4d1484e"
  };

firebase.initializeApp(firebaseConfig);

import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default function App() {
    const[nomes, setNomes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const nomesCollection = firebase.firestore().collection('Nomes');
            const snapshot = await nomesCollection.get();

            const data = [];
            snapshot.forEach((doc) => {
                data.push({ id: doc.id, ...doc.data()});
            });

            setNomes(data);
        };

        fetchData();
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text> Lista de Nomes: </Text>
            <FlatList
                data={nomes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.Nome} {item.Sobrenome}</Text>
                    </View>
                )}
            />    
        </View>
    );
}