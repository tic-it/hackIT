# This program assumes that you have an image named "output_image.png" in the same directory as the script, and it will attempt to extract any hidden text from this image.

# Make sure to replace "output_image.png" with the path to the image from which you want to extract hidden text.

from PIL import Image

# Function to extract hidden text from an image
def extract_text_from_image(image_path):
    try:
        img = Image.open(image_path)
        extracted_text = ""

        # Iterate over each pixel in the image
        for x in range(img.width):
            for y in range(img.height):
                pixel = img.getpixel((x, y))

                # Extract the least significant bit from each color channel
                for color_channel in range(3):
                    extracted_text += str(pixel[color_channel] & 1)

        # Convert the binary text to ASCII characters
        extracted_text = ''.join(chr(int(extracted_text[i:i+8], 2)) for i in range(0, len(extracted_text), 8))

        return extracted_text

    except Exception as e:
        print("Error:", e)

# Example usage
if __name__ == "__main__":
    # Extracting hidden text from an image
    extracted_text = extract_text_from_image("output_image.png")
    print("Extracted Text:", extracted_text)
