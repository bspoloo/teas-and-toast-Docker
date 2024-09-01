'use client';
import React from 'react';
import { Page, Text, Image, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    paddingTop: 60, 
    paddingBottom: 50,    
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', 
    padding: 10,
    marginBottom: 80,
  },

  footer: {
    fontSize: 12,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', 
    padding: 10,
  },
  imageLogo: {
    height: 35,
    width: 35,
  },
  section: {
    textAlign: 'center',    
    paddingLeft: 40,
    paddingRight: 40,
  },
  title: {
    fontSize: 30, 
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 20, 

  },
  image: {
    objectFit: 'cover', 
    height: 250,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20, 
    marginBottom: 10,
  },
  instructions: {
    marginBottom: 20,
  },
  ingredients: {
    marginBottom: 20,
    
  },
  TextContent: {
    textAlign: 'left',
    fontSize: 14,
    textIndent: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  videoContainer: {
    marginTop: 8,
    marginBottom: 20,
  },
});

type RecipePdfDocumentProps = {
  ingredients: String[];
  measures: String[];
  videoTutorial: string;
  imageMeal: string;
  loading: boolean;
  recipeInstructions: String[];
  titleRecipe: string;
}
const RecipePdfDocument = ({ ingredients, measures, videoTutorial, imageMeal, loading, recipeInstructions, titleRecipe }: RecipePdfDocumentProps) => {

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header} fixed>
          <Image src="/logo.png" style={{ height: 30, width: 30, marginRight: 10 }} />
          <Text>Taste & Toast - Delicious Recipes</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>{titleRecipe}</Text>
          {imageMeal && <Image style={styles.image} src={imageMeal} />}
          <Text style={styles.sectionTitle}>Steps to follow to achieve this delicious recipe!!</Text>
          <View style={[styles.instructions, styles.TextContent]}>
            {recipeInstructions.map((line, index) => {
              const cleanedLine = line.replace(/\r\n\r\n/g, '').replace(/\r\n/g, '');
              if (cleanedLine.trim() === '') return null;
              return (
                <Text key={index}>
                  {index + 1}: {cleanedLine}
                </Text>
              );
            })}
          </View>
          <Text style={styles.sectionTitle}>What are the necessary measures for its preparation?</Text>
          <View style={[styles.ingredients, styles.TextContent]}>
            {ingredients.map((ingredient, index) => (
              <Text key={index}>
                {index + 1}: {ingredient} - {measures[index]}
              </Text>
            ))}
          </View>
          {videoTutorial && (
            <View style={styles.videoContainer}>
              <Text style={styles.sectionTitle}>Watch the video tutorial here:</Text>
              <Text style={styles.TextContent}>{videoTutorial}</Text>
            </View>
          )}
        </View>
        <View style={styles.footer} fixed>
          <Text>Contact us at carlososmarof@gmail.com & animetx098@gmail.com</Text>
        </View>
      </Page>
    </Document>
  );
};

export default RecipePdfDocument;
