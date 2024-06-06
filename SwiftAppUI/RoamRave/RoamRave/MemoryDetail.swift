//
//  MemoryDetail.swift
//  RoamRave
//
//  Created by Mari Rosenwald on 5/11/24.
//

import SwiftUI

struct MemoryDetail: View {
    @Environment(\.presentationMode) var presentationMode
    @Binding var memories: [Memory]
    let memory: Memory

    let skyBlue = Color(red: 0.4627, green: 0.8392, blue: 1.0)
    let babyPink = Color(red: 0.9961, green: 0.7373, blue: 1.0)
    
    var body: some View {
        VStack {
            Spacer().frame(height: 25)
            Text(memory.title)
                .font(.title)
                .padding()

            // Display memory photos
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: 5) {
                    ForEach(memory.photos, id: \.self) { photoPath in
                        let photoURL = URL(fileURLWithPath: photoPath)
                        if let imageData = try? Data(contentsOf: photoURL),
                           let uiImage = UIImage(data: imageData) {
                            Image(uiImage: uiImage)
                                .resizable()
                                .scaledToFit()
                                .frame(width: 300, height: 300)
                        } else {
                            Image(systemName: "photo")
                                .resizable()
                                .scaledToFit()
                                .frame(width: 200, height: 200)
                                .foregroundColor(.gray)
                                .overlay(Text("Photo Placeholder").foregroundColor(.white))
                        }
                    }
                }
                .padding()
            }
            Text(memory.summary)
                .foregroundColor(Color.black)
                .frame(width: 300, alignment: .leading)
                .padding()
                .background(babyPink)
                
            Spacer()
            
            Button(action: {
                deleteMemory()
            }) {
                Text("Delete Memory")
                    .foregroundColor(.white)
                    .padding()
                    .background(Color.red)
                    .cornerRadius(10)
            }
            .padding()
        }
        .navigationBarTitleDisplayMode(.inline)
    }
    
    private func deleteMemory() {
        if let index = memories.firstIndex(where: { $0.id == memory.id }) {
            memories.remove(at: index)
            saveMemories()
            presentationMode.wrappedValue.dismiss()
        }
    }
    
    private func saveMemories() {
        guard let documentsDirectory = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask).first else {
            print("Error: Unable to access documents directory")
            return
        }
        let fileURL = documentsDirectory.appendingPathComponent("MemoriesData.json")
        
        do {
            let data = try JSONEncoder().encode(memories)
            try data.write(to: fileURL)
            print("Memories updated successfully")
        } catch {
            print("Error saving memories: \(error)")
        }
    }
}

#Preview {
    MemoryDetail(memories: .constant([Memory(id: "1", title: "Example Memory", summary: "This is a sample memory", photos: [])]), memory: Memory(id: "1", title: "Example Memory", summary: "This is a sample memory", photos: []))
}
