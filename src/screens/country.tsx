import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  SectionList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../utils/theme';
import {COUNTRIES, Country as CountryType} from '../utils/constant';
import { images } from '../utils/images';

interface CountryScreenProps {
  navigation: any;
  route: {
    params: {
      onSelect: (country: CountryType) => void;
    };
  };
}

const Country = ({navigation, route}: CountryScreenProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const sections = Object.keys(COUNTRIES).map(key => ({
    title: key,
    data: COUNTRIES[key].filter(country =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()),
    ),
  })).filter(section => section.data.length > 0);

  const handleCountrySelect = (country: CountryType) => {
    route.params.onSelect(country);
    navigation.goBack();
  };

  const renderItem = ({item}: {item: CountryType}) => (
    <TouchableOpacity 
      style={styles.countryItem}
      onPress={() => handleCountrySelect(item)}
    >
      <Text style={styles.flag}>{item.flag}</Text>
      <Text style={styles.countryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderSectionHeader = ({section: {title}}: {section: {title: string}}) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.closeButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.closeText}>✕</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Image 
            source={images.search} 
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Country"
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#999"
            autoFocus
          />
          <TouchableOpacity style={styles.voiceButton}>
            <Image 
              source={images.mic} 
              style={styles.micIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <SectionList
        sections={sections}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        stickySectionHeadersEnabled={true}
        keyExtractor={(item) => item.code}
        style={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Country;

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: colors.listBackground,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 16,
    marginBottom: 7,
  },
  closeButton: {
    padding: 8,
  },
  closeText: {
    fontSize: 20,
    color: '#000',
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    elevation: 5,
    borderRadius: 12,
    paddingHorizontal: 16,
    shadowColor: colors.primary,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    height: 60,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#999',
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  voiceButton: {
    padding: 8,
  },
  micIcon: {
    width: 20,
    height: 20,
    tintColor: '#999',
  },
  list: {
    flex: 1,
  
  },
  sectionHeader: {
   
    paddingVertical: 16,
  
    paddingHorizontal: 30,
    
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    
    paddingVertical: 16,
    paddingHorizontal: 30,

    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  flag: {
    fontSize: 24,
    marginRight: 12,
  },
  countryName: {
    fontSize: 16,
    color: colors.textPrimary,
    fontWeight: '500',
  },
});