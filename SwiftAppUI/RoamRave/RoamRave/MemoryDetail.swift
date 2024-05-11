//
//  MemoryDetail.swift
//  RoamRave
//
//  Created by Mari Rosenwald on 5/11/24.
//

import SwiftUI

struct MemoryDetail: View {
    let memory: Memory

    var body: some View {
        VStack {
            Text(memory.title)
                .font(.title)
                .padding()
            
            Text(memory.summary)
                .padding()

            // Display memory photos
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: 10) {
                    ForEach(memory.photos, id: \.self) { photoURLString in
                        if let photoURL = URL(string: photoURLString),
                           let imageData = try? Data(contentsOf: photoURL),
                           let uiImage = UIImage(data: imageData) {
                            Image(uiImage: uiImage)
                                .resizable()
                                .scaledToFit()
                                .frame(width: 200, height: 200)
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
            
            Spacer()
        }
        .navigationBarTitle(Text("Memory Details"), displayMode: .inline)
    }
}
#Preview {
    MemoryDetail(memory: Memory(id: "1", title: "Example Memory", summary: "This is a sample memory", photos: []))
}
