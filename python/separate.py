# pip install spleeter

# Replace "input.mp3" with the path to your input MP3 file and "output/" with the directory where you want to save the separated audio files.

# This code uses the Spleeter pre-trained model for separating vocals and accompaniment into two separate audio tracks. You can adjust the separator's configuration to use other pre-trained models with different levels of separation, depending on your specific needs.

# Please note that Spleeter requires a substantial amount of computational resources and may take some time to process long audio files. Additionally, the quality of the separation may vary depending on the complexity of the audio and the chosen model. 

import os
from spleeter.separator import Separator

# Define the input MP3 file and output directory
input_mp3_file = "input.mp3"
output_directory = "output/"

# Check if the output directory exists, and create it if not
if not os.path.exists(output_directory):
    os.makedirs(output_directory)

# Initialize the Spleeter separator
separator = Separator('spleeter:2stems')

# Perform vocal separation
separator.separate_to_file(input_mp3_file, output_directory)

print(f"Vocals separated and saved to {output_directory}")
