//
//  AddMemory.swift
//  RoamRave
//
//  Created by Mari Rosenwald on 5/11/24.
//

import SwiftUI
import UIKit

struct AddMemory: View {
    @State private var title = ""
    @State private var summary = ""
    @State private var selectedImages: [UIImage] = []
    @State private var showImagePicker = false
    @State private var sourceType: UIImagePickerController.SourceType = .photoLibrary
    @Environment(\.presentationMode) var presentationMode
    
    var body: some View {
        NavigationView {
            Form {
                Section(header: Text("Memory Details")) {
                    TextField("Title", text: $title)
                    TextField("Summary", text: $summary)
                }
                Section(header: Text("Photos")) {
                    Button(action: {
                        sourceType = .photoLibrary
                        showImagePicker = true
                    }) {
                        Text("Select from Library")
                    }
                    Button(action: {
                        sourceType = .camera
                        showImagePicker = true
                    }) {
                        Text("Take Photo")
                    }
                    if !selectedImages.isEmpty {
                        ScrollView(.horizontal, showsIndicators: false) {
                            HStack(spacing: 10) {
                                ForEach(selectedImages, id: \.self) { image in
                                    Image(uiImage: image)
                                        .resizable()
                                        .scaledToFit()
                                        .frame(width: 100, height: 100)
                                }
                            }
                        }
                    }
                }
            }
            .navigationTitle("Add Memory")
            .toolbar {
                ToolbarItem(placement: .navigationBarTrailing) {
                    Button("Save") {
                        saveMemory()
                    }
                }
            }
            .sheet(isPresented: $showImagePicker) {
                ImagePicker(sourceType: sourceType, selectedImages: $selectedImages)
            }
        }
    }
    func saveMemory() {
        guard let documentsDirectory = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask).first else {
            print("Error: Unable to access documents directory")
            return
        }
        let fileURL = documentsDirectory.appendingPathComponent("MemoriesData.json")
        
        var memories: [Memory] = []
        
        do {
            let data = try Data(contentsOf: fileURL)
            memories = try JSONDecoder().decode([Memory].self, from: data)
        } catch {
            print("Error loading memories: \(error)")
        }
        var imageUrls: [String] = []
        for image in selectedImages {
            let imageUrl = documentsDirectory.appendingPathComponent(UUID().uuidString + ".jpg")
            if let imageData = image.jpegData(compressionQuality: 0.8) {
                do {
                    try imageData.write(to: imageUrl)
                    imageUrls.append(imageUrl.absoluteString)
                } catch {
                    print("Error saving image: \(error)")
                }
            }
        }
        let newMemory = Memory(id: UUID().uuidString, title: title, summary: summary, photos: imageUrls)
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
    AddMemory()
}
