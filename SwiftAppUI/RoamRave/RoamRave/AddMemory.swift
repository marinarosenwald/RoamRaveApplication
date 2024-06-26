//
//  AddMemory.swift
//  RoamRave
//
//  Created by Mari Rosenwald on 5/11/24.
//

import SwiftUI
import UIKit

struct AddMemory: View {
    @Binding var memories: [Memory]
    @State private var title = ""
    @State private var summary = ""
    @State private var selectedImages: [UIImage] = []
    @State private var showPhotoLibraryPicker = false
    @State private var showCameraPicker = false
    @State private var summaryHeight: CGFloat = 200
    @State private var titleHeight: CGFloat = 50
    @Environment(\.presentationMode) var presentationMode

    let skyBlue = Color(red: 0.4627, green: 0.8392, blue: 1.0)
    let babyPink = Color(red: 0.9961, green: 0.7373, blue: 1.0)
    
    var body: some View {
        NavigationView {
            ScrollView {
                VStack {
                    Spacer().frame(height: 25)
                    
                    TextField("Title of your entry... ", text: $title, axis: .vertical)
                        .foregroundColor(Color.black)
                        .frame(width: 275, height: titleHeight)
                        .padding()
                        .background(babyPink)
                        .lineLimit(nil)
                        .onChange(of: title) {
                            let newHeight = max(50, heightForText(text: title, font: .systemFont(ofSize: 19), minH: 50, width: 275))
                            titleHeight = newHeight
                        }
                    
                    Button(action: {
                        showPhotoLibraryPicker = true
                    }) {
                        Text("Select from Library")
                    }
                    .foregroundColor(Color.black)
                    .frame(width: 275, height: 70)
                    .padding()
                    .background(skyBlue)
                    .cornerRadius(10)
                    
                    Button(action: {
                        showCameraPicker = true
                    }) {
                        Text("Take Photo")
                    }
                    .foregroundColor(Color.black)
                    .frame(width: 275, height: 70)
                    .padding()
                    .background(skyBlue)
                    .cornerRadius(10)
                    
                    if !selectedImages.isEmpty {
                        ScrollView(.horizontal, showsIndicators: false) {
                            HStack(spacing: 10) {
                                ForEach(selectedImages, id: \.self) { image in
                                    Image(uiImage: image)
                                        .resizable()
                                        .scaledToFit()
                                        .frame(width: 150, height: 150)
                                        .padding(.leading, 20)
                                }
                            }
                        }
                    }
                    
                    TextField("Write your journal entry here...", text: $summary, axis: .vertical)
                        .foregroundColor(Color.black)
                        .frame(width: 275, height: summaryHeight)
                        .padding()
                        .background(babyPink)
                        .lineLimit(nil)
                        .onChange(of: summary) {
                            let newHeight = max(200, heightForText(text: summary, font: .systemFont(ofSize: 19), minH: 200, width: 275))
                            summaryHeight = newHeight
                        }
                }
                .toolbar {
                    ToolbarItem(placement: .navigationBarTrailing) {
                        Button("Save") {
                            saveMemory()
                        }
                    }
                }
                .sheet(isPresented: $showPhotoLibraryPicker) {
                    PhotoLibraryPicker(selectedImages: $selectedImages)
                }
                .sheet(isPresented: $showCameraPicker) {
                    CameraPicker(selectedImages: $selectedImages)
                }
            }
        }
    }
    
    func heightForText(text: String, font: UIFont, minH: CGFloat, width: CGFloat) -> CGFloat {
        let constraintRect = CGSize(width: width, height: .greatestFiniteMagnitude)
        let boundingBox = text.boundingRect(with: constraintRect, options: [.usesLineFragmentOrigin, .usesFontLeading], attributes: [NSAttributedString.Key.font: font], context: nil)
        return max(minH, boundingBox.height)
    }
    
    func saveMemory() {
        guard let documentsDirectory = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask).first else {
            print("Error: Unable to access documents directory")
            return
        }
        let fileURL = documentsDirectory.appendingPathComponent("MemoriesData.json")
        
        var imagePaths: [String] = []
        for image in selectedImages {
            let imagePath = documentsDirectory.appendingPathComponent(UUID().uuidString + ".jpg")
            if let imageData = image.jpegData(compressionQuality: 0.8) {
                do {
                    try imageData.write(to: imagePath)
                    imagePaths.append(imagePath.path)
                } catch {
                    print("Error saving image: \(error)")
                }
            }
        }
        
        let newMemory = Memory(id: UUID().uuidString, title: title, summary: summary, photos: imagePaths)
        memories.append(newMemory)
        
        do {
            let newData = try JSONEncoder().encode(memories)
            try newData.write(to: fileURL)
            print("Memory saved successfully")
            presentationMode.wrappedValue.dismiss()
        } catch {
            print("Error saving memory: \(error)")
        }
    }
}

#Preview {
    AddMemory(memories: .constant([]))
}
