# Make sure to replace "input_image.png" with the path to your input image and "output_image.png" with the path where you want to save the image with hidden text.

# Please note that this method is not suitable for hiding large amounts of data, as it can result in visible artifacts in the image. Additionally, the image format may also impact the success of the text hiding, so it's important to use lossless image formats like PNG for better results.

from PIL import Image

# Function to hide text in an image
def hide_text_in_image(image_path, secret_text, output_image_path):
    try:
        # Open the image
        img = Image.open(image_path)

        # Convert the secret text to binary
        secret_binary = ''.join(format(ord(char), '08b') for char in secret_text)

        # Make sure the text can fit within the image
        if len(secret_binary) > img.width * img.height * 3:
            raise ValueError("Text too large for the image")

        data_index = 0

        # Iterate over each pixel in the image
        for x in range(img.width):
            for y in range(img.height):
                pixel = list(img.getpixel((x, y)))

                # Modify the least significant bits of each color channel
                for color_channel in range(3):
                    if data_index < len(secret_binary):
                        pixel[color_channel] = pixel[color_channel] & ~1 | int(secret_binary[data_index])
                        data_index += 1

                img.putpixel((x, y), tuple(pixel))

        img.save(output_image_path)
        print("Text hidden successfully!")

    except Exception as e:
        print("Error:", e)

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
    # Hiding text in an image
    hide_text_in_image("input_image.png", "This is a secret message.", "output_image.png")

    # Extracting hidden text from an image
    extracted_text = extract_text_from_image("output_image.png")
    print("Extracted Text:", extracted_text)
